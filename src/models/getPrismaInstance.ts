import { PrismaClient } from "@prisma/client";

export default function getPrismaInstance() {
  return new PrismaClient();
}
