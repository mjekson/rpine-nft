import { Address } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { NftCollectionV3 } from '../wrappers/NftCollectionV3';

// Replace with your NFT collection contract address
const COLLECTION_ADDRESS = Address.parse('EQA-YqAeZV_O1cTng5lkiyeVkRZ33lgj3P6byNDembCpBb9Z'); //testnet
// Replace with the new second owner address
const SECOND_OWNER_ADDRESS = Address.parse('EQDk5MCKONMMwXSJc6ZmnfwVmyVgt4-qfvumIK2aUlesQhVP'); //testnet proxy

export async function run(provider: NetworkProvider) {
    const nftCollection = provider.open(NftCollectionV3.createFromAddress(COLLECTION_ADDRESS)); 

    // Send the transaction to change the second owner's address
    await nftCollection.sendChangeSecondOwner(provider.sender(), SECOND_OWNER_ADDRESS);
}
