// /pages/api/image/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

const DIRECTUS_BASE_URL = process.env.DIRECTUS_BASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid image ID' });
  }

  const imageRes = await fetch(`${DIRECTUS_BASE_URL}/assets/${id}`);
  if (!imageRes.ok) {
    return res.status(imageRes.status).send('Image not found');
  }

  const contentType = imageRes.headers.get('content-type');
  res.setHeader('Content-Type', contentType || 'image/jpeg');
  const imageBuffer = await imageRes.arrayBuffer();
  res.send(Buffer.from(imageBuffer));
}
