import { LoadFixtureFunction } from '../types'
import { ethers } from 'hardhat'
import { UniswapV3Staker } from '../../typechain'
import { uniswapFixture, UniswapFixtureType } from '../shared/fixtures'
import { expect } from '../shared'
import { createFixtureLoader, provider } from '../shared/provider'

let loadFixture: LoadFixtureFunction

describe('unit/Deployment', () => {
  let context: UniswapFixtureType

  before('loader', async () => {
    loadFixture = createFixtureLoader(provider.getWallets(), provider)
  })

  beforeEach('create fixture loader', async () => {
    context = await loadFixture(uniswapFixture)
  })

  it('deploys and has an address', async () => {
    const stakerFactory = await ethers.getContractFactory('UniswapV3Staker')
    const staker = (await stakerFactory.deploy(
      context.factory.address,
      context.nft.address
    )) as UniswapV3Staker
    expect(staker.address).to.be.a.string
  })
})
