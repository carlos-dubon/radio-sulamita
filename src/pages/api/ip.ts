import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import Cors from "cors";
import { runMiddleware } from "@lib/helpers";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

type Data = {
  ip: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // cors middleware
  await runMiddleware(req, res, cors);

  const detectedIp: string = requestIp.getClientIp(req) as string;
  res.status(200).json({ ip: detectedIp });
}
