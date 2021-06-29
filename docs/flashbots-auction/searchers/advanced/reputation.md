---
title: searcher reputation
---

In order to maintain reliable relay performance, Flashbots introduced searcher reputation to help provide consistent access during periods of heavy load to searcher with a good performance track record. Reputation is one of many solutions currently being explored to make the Flashbots relay robust against sophisticated level 7 attacks. The system described on this page is likely to change and we encourage you to participate in defining the direction taken by engaging in the [discussion board](https://github.com/flashbots/pm/discussions/79).

## Reputation queues

The current reputation system is designed to classify searchers into a high reputation and low reputation queue. The high reputation queue is designed to filter out searchers who use an excessive amount of computation resources on the relay. Otherwise, both queues are identical.

## Reputation scoring

To determine in which queue a searcher belongs, Flashbots looks at their history of submissions to the relay. Specifically, Flashbots uses the following scoring function:

$$r(U) = \frac{\sum_{T\in H_U}\Delta_{coinbase_T} + g_Tp_T}{\sum_{T\in S_U}g_T}$$

$r$: searcher reputation score.  
$H_U$: set of all transactions $T$ submitted by searcher $U$ to the flashbots relay `eth_sendBundle` RPC and successfully landed on chain.  
$S_U$: set of all transactions $T$ submitted by searcher $U$ to the flashbots relay `eth_sendBundle` RPC.  
$g_{T}$: _gas used_ by transaction $T$.  
$p_{T}$: _gas price_ of transaction $T$.  
$\Delta_{coinbase_T}$: coinbase difference from direct payment in transaction $T$.  

## Querying reputation

Flashbots uses a dynamic threshold to classify users between the high reputation and low reputation queue. The dynamic variables are: 1) the historical time period considered to calculate reputation, 2) the cutoff reputation score which classifies a searcher as "high reputation". Using a dynamic threshold allows the relay to adapt in periods of high demand and maintain high reliability for top searchers.

A searcher can query their current reputation status using the [`flashbots_getUserStats` RPC method](https://github.com/flashbots/mev-relay-js#flashbots_getuserstats).

## Building reputation

Searcher reputation is associated with the signing key used to authenticate with the relay. That is, the ethereum address associated with the `X-Flashbots-Signature` field of your bundle submission.

As a searcher, the best way to improve your score is to only submit transactions to the relay which have a high likelihood of landing on chain.
