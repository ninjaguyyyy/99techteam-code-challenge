# Code Review Report — WalletPage Component

This folder contains detailed analysis of inefficiencies and anti-patterns found in the provided React + TypeScript code.

- **Original component:** [`RawComp.tsx`](../RawComp.tsx)
- **Refactored component:** [`RefactoredComp.tsx`](../RefactoredComp.tsx)

Each issue has its own file with:
- Problematic code block
- Explanation of why it’s an issue
- Suggested fix

## Issues List

1. [Incorrect / Missing Types (`any`, missing `blockchain`)](./issue-01-typing.md)
2. [Wrong Variable Reference and Filter Logic](./issue-02-filter-logic.md)
3. [Wrong `useMemo` Dependencies](./issue-03-memo-deps.md)
4. [Recomputing Priority Multiple Times](./issue-04-recompute-priority.md)
5. [Unstable List Keys (`index`)](./issue-05-keys.md)
6. [Unused or Wrongly Used `formattedBalances`](./issue-06-formatted-balances.md)
7. [Props Mismatch (`BoxProps` vs `<div>`)](./issue-07-props-mismatch.md)
8. [Possible NaN in USD Value Calculation](./issue-08-NaN.md)
9. [Formatting with `toFixed()`](./issue-09-formatting.md)
10. [Problems in `getPriority` function](./issue-10-get-priority.md)

---
