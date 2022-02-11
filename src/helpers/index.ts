import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const formatTimestamp = (timestamp: Timestamp): string => {
  const date: Date = timestamp.toDate();

  // 24 de enero del 2022, 12:00 AM
  return format(date, "dd 'de' MMMM 'del' yyyy',' hh:mm a", { locale: es });
};

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// function to get the country code [US/GT/etc] based on ip
const getCountry = async (): Promise<string> => {
  const { data } = await axios.get(
    "https://radio-sulamita.vercel.app/api/country"
  );

  return data.country;
};

export { formatTimestamp, runMiddleware, getCountry };
