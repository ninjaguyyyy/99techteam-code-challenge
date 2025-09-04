# Issue 7: Props Mismatch (`BoxProps` vs `<div>`)

**Problematic code**
```tsx
interface Props extends BoxProps {}

return <div {...rest}>{rows}</div>;
```
**Why it’s an issue**
- BoxProps implies using MUI’s Box component, not a plain div

**Fix**
```tsx
// Option 1: actually use Box
return <Box {...rest}>{rows}</Box>;

// Option 2: change type if sticking with div
interface Props extends React.HTMLAttributes<HTMLDivElement> {}
```