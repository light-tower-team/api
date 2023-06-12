import { defineConfig, loadEnv } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: env.HOST,
      port: parseInt(env.PORT),
    },
    optimizeDeps: {
      exclude: [
        "@nestjs/platform-socket.io",
        "@nestjs/websockets",
        "@nestjs/microservices",
        "amqp-connection-manager",
        "amqplib",
        "nats",
        "@grpc/proto-loader",
        "@grpc/grpc-js",
        "redis",
        "kafkajs",
        "mqtt",
        "cache-manager",
      ],
    },
    plugins: [
      tsconfigPaths(),
      ...VitePluginNode({
        adapter: "nest",
        appPath: "./src/main.ts",
        tsCompiler: "swc",
      }),
    ],
  };
});
