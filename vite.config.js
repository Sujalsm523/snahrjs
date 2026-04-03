import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/snahrjs",
  server: {
    // Replace with your specific ngrok URL
    allowedHosts: ["e302-2405-201-47-f9b1-1819-c47c-cfc0-1a3c.ngrok-free.app"],

    // Optional: Set host to true to allow access from your local network
    host: true,
  },
});
