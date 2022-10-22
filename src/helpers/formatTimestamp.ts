import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";
import es from "date-fns/locale/es";

const formatTimestamp = (timestamp: Timestamp): string => {
  const date: Date = timestamp.toDate();

  // 24 de enero del 2022, 12:00 AM
  return format(date, "dd 'de' MMMM 'del' yyyy',' hh:mm a", { locale: es });
};

export { formatTimestamp };
