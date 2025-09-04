# Issue 8: Possible NaN in USD Value Calculation

**Problematic code**
```ts
const usdValue = prices[balance.currency] * balance.amount;
```
**Why it’s an issue**
- If prices[balance.currency] is undefined, result becomes NaN.

**Fix**
```ts
const price = prices[balance.currency] ?? 0;
const usdValue = price * balance.amount;
```