import axios from "axios";

const fetchAPI =
  (
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    data?: any,
    headers?: any
  ) =>
  async () => {
    const reqData = data ? { data: data } : {};
    const reqHeaders = data ? { headers: headers } : {};

    try {
      const res = await axios({
        method: method,
        url: url,
        ...reqData,
        ...reqHeaders,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

export default fetchAPI;
