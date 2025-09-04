# Issue 1: Incorrect / Missing Types (`any`, missing `blockchain`)

**Problematic code**
```ts
const getPriority = (blockchain: any): number => { /* ... */ }

interface WalletBalance {
  currency: string;
  amount: number;
}
// later used as:
balances.filter((balance: WalletBalance) => {
  const balancePriority = getPriority(balance.blockchain);
  //                               ^^^^^^^^^^^^^^^^^^^ property not in type
})
```
**Why it’s an issue**

- Using any defeats TypeScript’s type-safety.
- WalletBalance lacks a blockchain field, but it’s used.

**Fix**
```ts
export enum Blockchain {
    Osmosis = 'Osmosis',
    Ethereum = 'Ethereum',
    Arbitrum = 'Arbitrum',
    Zilliqa = 'Zilliqa',
    Neo = 'Neo',
}

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: Blockchain;
}

const getPriority = (blockchain: Blockchain): number => { /* ... */ }
```