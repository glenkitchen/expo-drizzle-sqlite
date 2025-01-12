import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import {
  SQLiteProvider as ExpoSQLiteProvider,
  openDatabaseSync,
} from "expo-sqlite";
import { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";
import migrations from "../../db/migrations/migrations";

const DB_NAME = "trustory.db";

export default function SQLiteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const expoDb = openDatabaseSync(DB_NAME);
  const db = drizzle(expoDb);

  const { success, error } = useMigrations(db, migrations);
  if (error) {
    console.error(error);
  }
  if (success) {
    console.log("Migrations applied successfully");
  }

  useDrizzleStudio(expoDb);

  return (
    <Suspense fallback={<Fallback />}>
      <ExpoSQLiteProvider
        databaseName={DB_NAME}
        options={{ enableChangeListener: true }}
        useSuspense
      >
        {children}
      </ExpoSQLiteProvider>
    </Suspense>
  );
}

function Fallback() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
