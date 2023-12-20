---
title: Large transaction allowlist
---

Some projects need to post transactions that are larger in size (measured in bytes) than the txpool traditionally allows. Flashbots bundles are not subject to the same constraints. However, at the RPC level only transactions to certain contracts are allowed to be over 128kb.

The list of contracts supporting large transactions can be seen in the [RPC endpoint's allowlist](https://github.com/flashbots/rpc-endpoint/blob/main/server/whitelist.go#L21). To add your contract to this list please make a PR to the RPC endpoint appending your contract address to the allowlist and share a description of your use case in the body of the PR.