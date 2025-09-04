# Issue 9: Formatting with `toFixed()`

**Problematic code**
```ts
formatted: balance.amount.toFixed()
```
**Why it’s an issue**
- Defaults to 0 decimals, truncates fractional parts.
- Not locale-aware, no internationalization.

**Fix**
```ts
const formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
});

formatted: formatter.format(balance.amount);
```