require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind atom harvest battle force two'; 
let testAccounts = [
"0xcfa0d83e3ca8afd9b1829da15bcc2214f822f5960de8ea816274c86d0139c611",
"0x0c5b68317e6de6d2ac7479ababb75e73a74c12f56896a2d1184f24d8f618c6ba",
"0x880a436c29e5002601df9e4399501f8b48ef7653dd3310445cc26cb379ad71b8",
"0xc665084702bb0fc4ea7a61b9d04a3c7db9e2754bc05c9ebd2d21b87bc37ebb7f",
"0x2b4f3ace2fe945326ffe74d908bba0d3a2ca30048d6028b08f7bf353309b3a8f",
"0x69fa963f6807569e20566780111bb32966ad89c2add48c7fc2a4c4a3af9867a3",
"0xf44a32d792923147ada8ecbc6cabe8ced5c6fc9bdf52f820ccd1b76af180fd46",
"0x76d9b90131c185149ac9f28139c0e301434bfa9519b6d16e07d9d832a0d8cf2d",
"0xbacca1e174127660da1ec4299372783e466ffaefbe32a3f32c245dd1ff39eb26",
"0x742587076b1cb7bc275ad25abbe8b9cdabfb0d6d263a56a1b85fd1beb0c0cc23"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


