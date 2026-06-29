#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
VERSION="$(jq -r '.version' "$DIR/package.json")"
RELEASE_TAG="v$VERSION"

# Compare with latest release
LATEST_TAG=$(gh release list --limit 1 --json tagName --jq '.[0].tagName' 2>/dev/null || true)
if [ -n "$LATEST_TAG" ]; then
  LATEST_VER="${LATEST_TAG#packages/ui@}"
  LATEST_VER="${LATEST_VER#v}"
  HIGHEST=$(printf '%s\n' "$LATEST_VER" "$VERSION" | sort -t. -k1,1n -k2,2n -k3,3n | tail -n1)
  if [ "$HIGHEST" != "$VERSION" ] || [ "$VERSION" = "$LATEST_VER" ]; then
    echo "Error: new version $VERSION must be > latest release version $LATEST_VER"
    exit 1
  fi
fi

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
  echo "Error: index.ts has $EXPORT_COUNT export(s) but src/components/ has $COMPONENT_COUNT file(s)"
  exit 1
fi

pnpm build

git tag "$RELEASE_TAG"
git push origin "$RELEASE_TAG"

gh release create "$RELEASE_TAG" --title "$RELEASE_TAG" --notes ""
