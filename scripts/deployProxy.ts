import { Address, toNano } from '@ton/core';
import { Proxy } from '../wrappers/Proxy';
import { compile, NetworkProvider } from '@ton/blueprint';

const COLLECTION_ADDRESS = Address.parse('');
export async function run(provider: NetworkProvider) {
    const proxy = provider.open(
        Proxy.createFromConfig(
            {
                price: toNano('30'),
                refBack: toNano('4.5'),
                collectionAddress: COLLECTION_ADDRESS,
                adminAddress: Address.parse(''),
            }, await compile('Proxy')
        )
    );

    await proxy.sendDeploy(provider.sender(), toNano('0.1'));

    await provider.waitForDeploy(proxy.address);
}
