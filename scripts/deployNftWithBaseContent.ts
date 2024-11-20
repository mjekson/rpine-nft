import { Address } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { NftCollectionV3 } from '../wrappers/NftCollectionV3';

const COLLECTION_ADDRESS = Address.parse('EQA-YqAeZV_O1cTng5lkiyeVkRZ33lgj3P6byNDembCpBb9Z'); //testnet

export async function run(provider: NetworkProvider) {
    const nftCollection = provider.open(NftCollectionV3.createFromAddress(COLLECTION_ADDRESS));
    await nftCollection.sendDeployNftWithBaseContent(provider.sender(), 
        Address.parse('UQDkFMeWl29gxlimZkEBv4pbDVpNR2F4j5SArnJtVWqt_vdW') // to address
    )
}
