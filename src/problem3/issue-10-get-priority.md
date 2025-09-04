# Issue 10: Problems in `getPriority` function

**Problematic code**
```ts
const getPriority = (blockchain: any): number => {
    switch (blockchain) {
        case 'Osmosis':
            return 100;
        case 'Ethereum':
            return 50;
        case 'Arbitrum':
            return 30;
        case 'Zilliqa':
            return 20;
        case 'Neo':
            return 20;
        default:
            return -99;
    }
};
```
**Why it’s an issue**
1. Repetition and verbosity
- Multiple case branches return the same value (e.g. Zilliqa, Neo both return 20).
- The switch statement becomes harder to maintain as more blockchains are added.

2. Magic number
- Returning -99 as the default makes the code less readable. The meaning of -99 is unclear.

3. Input handling
- Unknown blockchains are silently mapped to -99 instead of producing a clear error.

**Fix**
```ts
export enum Blockchain {
    Osmosis = 'Osmosis',
    Ethereum = 'Ethereum',
    Arbitrum = 'Arbitrum',
    Zilliqa = 'Zilliqa',
    Neo = 'Neo',
}

const UNKNOWN_PRIORITY = -99;

const PRIORITY_MAP: Record<Blockchain, number> = {
    [Blockchain.Osmosis]: 100,
    [Blockchain.Ethereum]: 50,
    [Blockchain.Arbitrum]: 30,
    [Blockchain.Zilliqa]: 20,
    [Blockchain.Neo]: 20,
};

export const getPriority = (blockchain: Blockchain): number => {
    return PRIORITY_MAP[blockchain] ?? UNKNOWN_PRIORITY;
};
```