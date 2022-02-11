import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import cors from "cors";
import { runMiddleware } from "@lib/helpers";
import { Lookup, lookup } from "geoip-country";

const corsMiddleware = cors({
  methods: ["GET", "HEAD"],
});

type Data = {
  country: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // cors middleware
  await runMiddleware(req, res, corsMiddleware);
  const detectedIp: string = requestIp.getClientIp(req) as string;
  const geo: Lookup = lookup(detectedIp) as Lookup;
  res.status(200).json({ country: geo.country });
};

export default handler;
