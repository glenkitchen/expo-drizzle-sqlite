import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";

export const useDrizzle = () => {
  const db = useSQLiteContext();
  return drizzle(db);
};
