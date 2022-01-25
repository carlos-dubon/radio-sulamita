import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import Cors from "cors";
import { runMiddleware } from "@lib/helpers";
import { Lookup, lookup } from "geoip-country";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

type Data = {
  country: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // cors middleware
  await runMiddleware(req, res, cors);

  const detectedIp: string = requestIp.getClientIp(req) as string;

  const geo: Lookup = lookup(detectedIp) as Lookup;

  res.status(200).json({ country: geo.country });
}
