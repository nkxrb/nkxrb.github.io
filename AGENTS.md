# Project Notes

## `life/data` synchronization

- `life/data` in this repository must stay structurally consistent with `/Users/nkxrb/kidar-gitee/anzai-data/life/data`.
- The `anzai-data` repository is periodically synced into this repository. If a file exists here but not in `anzai-data`, a later overwrite sync can delete it and break imports such as `life-data.ts`.
- When business changes add, remove, rename, or reshape files under `life/data`, apply the same data-file change to both repositories:
  - `/Users/nkxrb/kidar/nkxrb.github.io`
  - `/Users/nkxrb/kidar-gitee/anzai-data`
- These two repositories may use different Git identities. Always run Git commands from the correct repository directory, for example:
  - `git -C /Users/nkxrb/kidar/nkxrb.github.io status`
  - `git -C /Users/nkxrb/kidar-gitee/anzai-data status`
- Before committing, compare the directories:
  - `diff -qr /Users/nkxrb/kidar/nkxrb.github.io/life/data /Users/nkxrb/kidar-gitee/anzai-data/life/data`
- Prefer the package scripts for routine checks and synchronization:
  - `pnpm life:data:check`
  - `pnpm life:data:sync`
  - `pnpm life:data:sync:push`
- `pnpm life:data:sync:push` mirrors this repository's `life/data` into `/Users/nkxrb/kidar-gitee/anzai-data/life/data`, validates imported JSON files, runs the site build, commits `life/data` changes in both repositories, then pushes both current branches.
- Commit and push each repository separately from its own directory so Git account configuration does not get mixed.
