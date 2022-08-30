# Usage

To connect to various networks, use the appropriate network flag for the specific network and relay URL, e.g. `-kiln`, `-ropsten`, `-sepolia`,  `-goerli` or `-mainnet`. You can add multiple relays comma-separated to the `-relays` flag, like this: `-relays https://relay1,https://relay2`

### **Goerli testnet**

Run mev-boost pointed at our [Goerli Relay](https://builder-relay-goerli.flashbots.net/):

 `./mev-boost -goerli -relay-check -relays https://0xafa4c6985aa049fb79dd37010438cfebeb0f2bd42b115b89dd678dab0670c1de38da0c4e9138c9290a398ecd9a0b3110@builder-relay-goerli.flashbots.net`

### **Ropsten testnet**

Run mev-boost pointed at our [Ropsten Relay](https://builder-relay-ropsten.flashbots.net/):

 `./mev-boost -ropsten -relay-check -relays https://0xb124d80a00b80815397b4e7f1f05377ccc83aeeceb6be87963ba3649f1e6efa32ca870a88845917ec3f26a8e2aa25c77@builder-relay-ropsten.flashbots.net`

### **Kiln testnet**

Run mev-boost pointed at our [Kiln Relay](https://builder-relay-kiln.flashbots.net/):

`./mev-boost -kiln -relay-check -relays https://0xb5246e299aeb782fbc7c91b41b3284245b1ed5206134b0028b81dfb974e5900616c67847c2354479934fc4bb75519ee1@builder-relay-kiln.flashbots.net`

### **Sepolia testnet**

Run mev-boost pointed at our [Sepolia Relay](https://builder-relay-sepolia.flashbots.net/):

 `./mev-boost -sepolia -relay-check -relays https://0x845bd072b7cd566f02faeb0a4033ce9399e42839ced64e8b2adcfc859ed1e8e1a5a293336a49feac6d9a5edb779be53a@builder-relay-sepolia.flashbots.net`

## CLI Commands - [Advanced]

### **`test-cli`**

`test-cli` is a utility to execute all proposer requests against mev-boost + relay. See also the [test-cli readme](https://github.com/flashbots/mev-boost/blob/main/cmd/test-cli/README.md).