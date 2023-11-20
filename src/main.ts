import { fastify } from "fastify";
import jwt from "jsonwebtoken";
import mercurius from "mercurius";

const app = fastify({
  logger: true,
  bodyLimit: 1_000_000,
});

// app.register(mercurius, {
//   schema,
//   graphiql: true,
//   ide: true,
//   path: "/graphql",
//   context(request): Context {
//     const authorization = request.headers["authorization"];

//     const token = authorization?.replace(/Bearer /, "");

//     const userId = token && (jwt.verify(token, "12345") as string);

//     return {
//       userId,
//     };
//   },
// });

app.listen({ port: 8080, host: "0.0.0.0" }).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
