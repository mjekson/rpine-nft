import { Address } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { NftCollectionV3 } from '../wrappers/NftCollectionV3';

const COLLECTION_ADDRESS = Address.parse('EQDox8nQDCrnBYqAHyHd9wVI06UfBKU7c9aixcSr9kfxSDo-'); //testnet

export async function run(provider: NetworkProvider) {
    const nftCollection = provider.open(NftCollectionV3.createFromAddress(COLLECTION_ADDRESS));
    await nftCollection.sendDeployNftWithBaseContent(provider.sender(), 
        Address.parse('0QAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGY9d') // to address
    )
}
