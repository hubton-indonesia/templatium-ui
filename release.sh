#!/usr/bin/env bash
set -euo pipefail

if [ $# -ne 1 ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

VERSION="$1"

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "Must be on main branch (currently on $BRANCH)"
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree is not clean"
  exit 1
fi

# Check index.ts exports match components count
EXPORT_COUNT=$(grep -c 'export \* from "./components/' src/index.ts)
COMPONENT_COUNT=$(ls -1 src/components/*.tsx 2>/dev/null | wc -l | tr -d ' ')
if [ "$EXPORT_COUNT" -ne "$COMPONENT_COUNT" ]; then
  echo "Warning: index.ts has $EXPORT_COUNT export(s) but src/components/ has $COMPONENT_COUNT file(s)"
  exit 1
fi

pnpm build

git tag "v$VERSION"
git push origin "v$VERSION"

gh release create "v$VERSION" --title "v$VERSION" --notes ""
