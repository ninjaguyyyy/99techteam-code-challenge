# Issue 5: Unstable List Keys (`index`)

**Problematic code**
```tsx
sortedBalances.map((balance, index) => (
  <WalletRow key={index} {...props} />
));
```
**Why it’s an issue**
- Using index as key can cause React to reuse or remount incorrectly on reordering.

**Fix**
```tsx
sortedBalances.map((balance) => (
    <WalletRow key={balance.currency} {...props} />
));
```