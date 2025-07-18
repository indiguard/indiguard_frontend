// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";
// import tagger from "@dhiwise/component-tagger";

// // https://vitejs.dev/config/
// export default defineConfig({
//   // This changes the out put dir from dist to build
//   // comment this out if that isn't relevant for your project
//   build: {
//     outDir: "build",
//     chunkSizeWarningLimit: 2000,
//   },
//   plugins: [tsconfigPaths(), react(), tagger()],
//   server: {
//     port: "4028",
//     host: "0.0.0.0",
//     strictPort: true,
//     allowedHosts: ['.amazonaws.com','localhost']
//   }
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";
// import tagger from "@dhiwise/component-tagger";
// import path from "path";

// export default defineConfig({
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"), // 👈 Add this line
//     },
//   },
//   build: {
//     outDir: "build",
//     chunkSizeWarningLimit: 2000,
//   },
//   plugins: [tsconfigPaths(), react(), tagger()],
//   server: {
//     port: "4028",
//     host: "0.0.0.0",
//     strictPort: true,
//     allowedHosts: ['.amazonaws.com', 'localhost'],
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Add this
    },
  },
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".amazonaws.com", "localhost"],
  },
});

