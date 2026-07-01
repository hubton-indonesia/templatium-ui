# Templatium UI

Shared components between Templatium's templates.

## Development

```sh
pnpm dev
```

## Build

```sh
pnpm build
```

Ensure components exported from [`src/index.ts`](./src/index.ts)

## Tagged Push

```sh
# ensure you're on main with clean working tree
git tag v<version>
git push origin v<version>
```

## Release

```sh
gh release create v<version> --title "v<version>" --notes "<summary>"
```
