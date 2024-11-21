import { Address, toNano } from '@ton/core';
import { compile, NetworkProvider } from '@ton/blueprint';
import { NftCollectionV3 } from '../wrappers/NftCollectionV3';

export async function run(provider: NetworkProvider) {
    const ui = provider.ui();

    const nftCollection = provider.open(
        NftCollectionV3.createFromAddress(Address.parse('EQAPkxIsDFz2sm1mQv6NIVghZD7HYmA_ld7wKtovtnMNZ9lq'))
    );

    const secondOwnerAddress = await nftCollection.getSecondOwner();

    await nftCollection.sendBatchMint(provider.sender(), {
        value: toNano('0.5'), // Укажите соответствующую сумму
        deployList: [
            {
                amount: toNano('0.05'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                editorAddress: provider.sender().address as Address,
                authorityAddress: secondOwnerAddress,
                content:
                    'https://raw.githubusercontent.com/r-pine/rpine-nft/master/scripts/forest-collection/items/json/0.json',
                index: 0,
            },
            {
                amount: toNano('0.05'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                editorAddress: provider.sender().address as Address,
                authorityAddress: secondOwnerAddress,
                content:
                    'https://raw.githubusercontent.com/r-pine/rpine-nft/master/scripts/forest-collection/items/json/1.json',
                index: 1,
            },
            {
                amount: toNano('0.05'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                editorAddress: provider.sender().address as Address,
                authorityAddress: secondOwnerAddress,
                content:
                    'https://raw.githubusercontent.com/r-pine/rpine-nft/master/scripts/forest-collection/items/json/2.json',
                index: 2,
            },
            {
                amount: toNano('0.05'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                editorAddress: provider.sender().address as Address,
                authorityAddress: secondOwnerAddress,
                content:
                    'https://raw.githubusercontent.com/r-pine/rpine-nft/master/scripts/forest-collection/items/json/3.json',
                index: 3,
            },
            {
                amount: toNano('0.05'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                editorAddress: provider.sender().address as Address,
                authorityAddress: secondOwnerAddress,
                content:
                    'https://raw.githubusercontent.com/r-pine/rpine-nft/master/scripts/forest-collection/items/json/4.json',
                index: 4,
            },
            {
                amount: toNano('0.05'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                editorAddress: provider.sender().address as Address,
                authorityAddress: secondOwnerAddress,
                content:
                    'https://raw.githubusercontent.com/r-pine/rpine-nft/master/scripts/forest-collection/items/json/5.json',
                index: 5,
            },
            {
                amount: toNano('0.05'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                editorAddress: provider.sender().address as Address,
                authorityAddress: secondOwnerAddress,
                content:
                    'https://raw.githubusercontent.com/r-pine/rpine-nft/master/scripts/forest-collection/items/json/6.json',
                index: 6,
            },
        ],
        useNextItemIndex: true,
    });

    ui.write('SBTs deployed!');
}
