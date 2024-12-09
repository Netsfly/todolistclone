import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  schema: "db/schema.ts",
  out: "db/migrations",
  dialect: "postgresql",

  dbCredentials: {
    url: 'postgresql://db_owner:9aIVRnfTWUw5@ep-rapid-wave-a29i3afd.eu-central-1.aws.neon.tech/db?sslmode=require',
  },
});