import { User, users } from "@/db/schema";
import { useDrizzle } from "@/hooks/useDrizzle";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const db = useDrizzle();

  const { data } = useLiveQuery(db.select().from(users));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Test get users from SQLite with Drizzle:</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
