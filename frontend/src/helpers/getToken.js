import axios from "axios";

const getToken = async () => {
  const { data } = await axios.post(`${process.env.GATSBY_API_AUTH}`, {
    identifier: `${process.env.GATSBY_API_IDENTIFIER}`,
    password: `${process.env.GATSBY_API_PASS}`,
  });

  return data.jwt;
};

export default getToken;
