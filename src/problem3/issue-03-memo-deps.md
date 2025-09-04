# Issue 3: Wrong `useMemo` Dependencies

**Problematic code**
```ts
const sortedBalances = useMemo(() => {
    return balances.filter(/* ... */);
}, [balances, prices]); // depends on prices unnecessarily
```
**Why it’s an issue**
- prices is not used inside the memo. This leads to unnecessary recomputation.

**Fix**
```ts
const sortedBalances = useMemo(() => {
    return balances.filter(/* ... */);
}, [balances]);
```