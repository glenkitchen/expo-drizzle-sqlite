# Overview

This is an Expo project with [Drizzle ORM](https://orm.drizzle.team/docs/connect-expo-sqlite) and [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/).

It dynamically loads the SQLiteProvider component on **native** platforms only.
For the **web** platform it just returns a dummy provider with the children.

Now I can still use the `expo web` command to move fast, with a first-pass at the UI.

## Implementation

```tsx
const SQLiteProvider = Platform.select({
  native: () => require("@/components/providers/SQLiteProvider").default,
  default: () =>
    function Provider({ children }: { children: React.ReactNode }) {
      return children;
    },
})();
```
