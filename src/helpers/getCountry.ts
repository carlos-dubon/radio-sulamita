import axios from "axios";

// function to get the country code [US/GT/etc] based on ip
const getCountry = async (): Promise<string> => {
  const { data } = await axios.get(
    "https://radio-sulamita.vercel.app/api/country"
  );

  return data.country;
};

export { getCountry };
