# uniswap-v3-staker

This is a canonical staking contract designed for [Uniswap V3](https://github.com/Uniswap/uniswap-v3-core).

**This is still under active development and not yet production ready.** This section will be updated once the contract is ready.

## Links:

* [Contract Design](docs/Design.md)

## Development and Testing

```sh
$ yarn
$ yarn test
```

## Gas Snapshots

```sh
# if gas snapshots need to be updated
$ UPDATE_SNAPSHOT=1 yarn test
```

## Contract Sizing

```sh
$ yarn size-contracts
```