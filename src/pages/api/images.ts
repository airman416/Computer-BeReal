import { prisma } from '../../../lib/prisma';

export default async function handle(req, res) {
  const images = await prisma.image.findMany();
  res.json(images);
}