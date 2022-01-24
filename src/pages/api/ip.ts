import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

type Data = {
  ip: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const detectedIp: string = requestIp.getClientIp(req) as string;
  res.status(200).json({ ip: detectedIp });
}
