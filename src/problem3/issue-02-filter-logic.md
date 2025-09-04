# Issue 2: Wrong Variable Reference and Filter Logic

**Problematic code**
```ts
balances.filter((balance: WalletBalance) => {
    const balancePriority = getPriority(balance.blockchain);
    if (lhsPriority > -99) {      // lhsPriority is not defined
        if (balance.amount <= 0) {  // keeps non-positive balances
            return true;
        }
    }
    return false;
});
```
**Why it’s an issue**

- lhsPriority is undefined (typo).
- Logic retains balances with amount <= 0, which is usually the opposite of the intent.

**Fix**
```ts
balances.filter((b) => {
    const p = getPriority(b.blockchain);
    return p > -99 && b.amount > 0;
});
```