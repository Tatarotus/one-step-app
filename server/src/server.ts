// Backend API RESTFUL
import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = Fastify();
const prisma = new PrismaClient();
const port = 3333;


app.register(cors);

app.get("/", () => {
  return JSON.stringify({ hello: "world" });
});

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber Ba",
      },
    },
  });
  return habits;
});

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log(`Server running on port ${port}`);
  });
