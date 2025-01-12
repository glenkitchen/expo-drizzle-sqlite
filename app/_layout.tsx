import { Slot } from "expo-router";
import { Platform } from "react-native";

const SQLiteProvider = Platform.select({
  native: () => require("@/components/providers/SQLiteProvider").default,
  default: () =>
    function Provider({ children }: { children: React.ReactNode }) {
      return children;
    },
})();

export default function RootLayout() {
  return (
    <SQLiteProvider>
      <Slot />
    </SQLiteProvider>
  );
}
