
import { PeerDnsClient } from './peer-dns-client.class';

describe('PeerDnsClient class', () => {
    describe('PeerDnsClient instance', () => {
        it('should instance', () => {
            const peerDnsClient = new PeerDnsClient({ domain: '', port: 3000 });

            expect(peerDnsClient).toBeInstanceOf(PeerDnsClient);
            peerDnsClient.close();
        });
    });
});