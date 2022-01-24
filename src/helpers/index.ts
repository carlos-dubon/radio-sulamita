import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { NextApiRequest, NextApiResponse } from "next";

const formatTimestamp = (timestamp: Timestamp): string => {
  const date: Date = timestamp.toDate();

  // 24 de enero del 2022, 12:00 AM
  return format(date, "dd 'de' MMMM 'del' yyyy',' hh:mm a", { locale: es });
};

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export { formatTimestamp, runMiddleware };
