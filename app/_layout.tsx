import { Slot } from "expo-router";
import { Platform } from "react-native";

// Create a Expo SQLiteProvider component that is only available on native platforms
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
