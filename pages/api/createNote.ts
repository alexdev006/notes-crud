import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;

  try {
    await prisma.note.create({
      data: {
        content,
        title,
      },
    });
    res.status(200).json({ message: 'Note Created' });
  } catch (error) {
    console.log('failure');
  }
}
