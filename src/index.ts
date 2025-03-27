import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  res.send({
    user,
  });
});

app.post("/user", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.send({
    user,
  });
});
app.listen(3000);
