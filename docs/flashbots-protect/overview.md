---
title: overview
---

Flashbots Protect makes it easy for everyday users and developers to use Flashbots for frontrunning protection. We abstract away the complexity of submitting bundles to the Flashbots Auction and make integrating as simple as adding a URL to your MetaMask.

Flashbots Protect RPC is an RPC endpoint that users can add to their wallets which sends their transactions to Flashbots. Learn more [here](/flashbots-protect/rpc/quick-start).

At a high level these are some of the major benefits of integrating Flashbots Protect:
- **Frontrunning protection:** transactions will not be seen by hungry sandwich bots in the public mempool.
- **No failed transactions:** transactions will only be mined if it doesn't include any reverts, so users don't pay for failed transactions. Note:  transactions could be included in uncled blocks, emitted to the mempool, and then included on-chain.
- **Priority in blocks:** transactions sent via Flashbots are mined at the top of blocks, giving them priority.

We intend to release more features on top of Flashbots Protect in the future, offering even more powerful functionality.

## Community integrations
The mistX team has developed a web SDK for integrating Flashbots that compliments the RPC endpoint. If you are a dApp that wants to offer easy support for Flashbots from your website, we recommend using the [mistX SDK](LINK HERE).
