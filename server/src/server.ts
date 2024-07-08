// Backend API RESTFUL
import Fastify from "fastify";
// import { PrismaClient } from "@prisma/client";
import { appRoutes } from "./routes";
import cors from "@fastify/cors";

const app = Fastify();
const port = 3333;

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log(`Server running on port ${port}`);
  });
