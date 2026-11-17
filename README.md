# Trai Harness

English | [中文](README.zh.md)

**Trai Harness** is an all-plugin agent harness based on [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`), built by [DeepSeek AI](https://deepseek.com) and extended with custom branding, personalized identity prompts, and Intel Mac (`x86_64`) native compatibility.

It is built on an **everything-is-a-plugin** architecture and powered by [Cordis](https://github.com/cordiverse/cordis), whose design is described in [_A Programming Paradigm for Spatiotemporal Composability_](https://arxiv.org/abs/2608.25512).

Documentation: [https://deepseek-harness.github.io/deepseek-harness/](https://deepseek-harness.github.io/deepseek-harness/)

## Developer preview

Trai Harness is in _developer preview_ and iterating rapidly alongside upstream DeepSeek Harness. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**

Review the [safety notice](SAFETY.md) before running the project.

## Run

### Run desktop application (macOS)

Download the latest Intel Mac build or package it directly from source:

```sh
pnpm run package:desktop:mac:x64:unsigned
```

The resulting application is placed in `apps/desktop/.desktop-build/targets/mac-x64/unsigned-artifacts/mac/Trai Harness.app` and can be copied to `/Applications/Trai Harness.app`.

### Run from source

To run from a repository checkout:

```sh
git clone https://github.com/imtusharrai/trai-harness.git
cd trai-harness
pnpm install
pnpm run build
pnpm dsh web
```

`pnpm run build` prepares the repository artifacts. `pnpm dsh web` uses those built artifacts without rebuilding.

### Sync updates from upstream DeepSeek Harness

To update your fork with new releases and changes from the official DeepSeek Harness repository while preserving your Trai Harness branding and Intel Mac support:

```sh
./scripts/update-and-rebuild.sh
```

## Community and support

- Submit feedback or bug reports through [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions).
- Add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to your plugin repository for discoverability.
- Join <a href="https://discord.gg/4MrtZUhpxg">DeepSeek Harness Discord community</a>.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Development

Start with the [development guide](docs/development.md) and [architecture documentation](docs/architecture.md).

`pnpm run dev:web` builds, serves, and rebuilds client bundles on source edits in one terminal, and `make help` lists the matching Make targets for Web and Desktop; the guide's application commands section owns the full table.

For agents, follow [AGENTS.md](AGENTS.md).

## Citation

```bibtex
@misc{deepseek-harness2026,
  title={DeepSeek Harness: Everything is a Plugin},
  author={DeepSeek-AI},
  year={2026},
  publisher={GitHub},
  howpublished={\url{https://github.com/deepseek-ai/deepseek-harness}},
}
```

## License

[MIT](LICENSE)

Third-party dependencies and their licenses are disclosed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
