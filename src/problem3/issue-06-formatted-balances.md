# Issue 6: Unused or Wrongly Used `formattedBalances`

**Problematic code**
```ts
const formattedBalances = sortedBalances.map(/* ... */);

// later
sortedBalances.map((balance: FormattedWalletBalance) => {
    // balance.formatted is not guaranteed here
});
```
**Why it’s an issue**
- Extra computation never used.
- Wrong type assumption when casting.

**Fix**
```tsx
formattedBalances.map((balance) => (
    <WalletRow
        key={balance.currency}
        amount={balance.amount}
        usdValue={(prices[balance.currency] ?? 0) * balance.amount}
        formattedAmount={balance.formatted}
    />
));
```