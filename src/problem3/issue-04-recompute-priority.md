# Issue 4: Recomputing Priority Multiple Times

**Problematic code**
```ts
balances
    .filter((b) => getPriority(b.blockchain) > -99 && b.amount > 0)
    .sort((l, r) => getPriority(l.blockchain) - getPriority(r.blockchain));
```
**Why it’s an issue**
- getPriority is called multiple times per element.

**Fix**
```ts
const enrichedBalances = balances.map((b) => ({
    ...b,
    priority: getPriority(b.blockchain),
}));

const sorted = enrichedBalances
    .filter((b) => b.priority > -99 && b.amount > 0)
    .sort((l, r) => r.priority - l.priority);
```