---
title: Pending transaction status API
---

Transactions that you submit to Flashbots Protect won't be shown on Etherscan because Etherscan won't be able to observe them in the public mempool. However, you can use our status API to check the status of your transactions. The URL for doing so is: `https://protect.flashbots.net/tx/YOUR_TX_HASH_HERE`

In turn you will receive a JSON response that looks like the following:

```json
{
    "status": "pending",
    "hash": "YOUR_TX_HASH",
    "maxBlockNumber": "13543898",
    "transaction": {
        "from": "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8",
        "to": "0xac03bb73b6a9e108530aff4df5077c2b3d481e5a",
        "data": "0x414bf389000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "gasLimit": "21000",
        "maxFeePerGas": "300",
        "maxPriorityFeePerGas": "10",
        "nonce": "0",
        "value": "10000000000",
    }
}
```

## Potential statuses
* `pending` - The transaction was received and is currently being submitted to miners
* `included` - The transaction was included on-chain
* `failed` - The transaction was submitted for 25 blocks and failed to be included on-chain
* `unknown` - The transaction was not received

## Privacy
In order to receive a response from the status API you must know and provide a transaction hash to look up. As a result, you are only able to look up transactions which you know about.