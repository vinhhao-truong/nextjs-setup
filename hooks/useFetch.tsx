import { QueryKey, useQuery } from "@tanstack/react-query";
import fetchAPI from "../lib/fetchAPI";

interface fetchInterface {
  url: string;
  key: QueryKey;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: any;
  reqData?: any;
}
export default function useFetch({
  url,
  method,
  key,
  reqData,
  headers,
}: fetchInterface) {
  const query = useQuery(
    key,
    fetchAPI(url, method ? method : "GET", reqData, headers)
  );

  return { ...query };
}
