# Create and setup the project
bunx create expo-app@latest
bun reset-project
bunx expo customize babel.config.js
bunx expo customize metro.config.js

# Add Expo DevClient
bun add expo-dev-client

# Add Drizzle and Expo SQLite
bun add drizzle-orm expo-sqlite expo-drizzle-studio-plugin babel-plugin-inline-import
bun add -D drizzle-kit
bunx drizzle-kit generate