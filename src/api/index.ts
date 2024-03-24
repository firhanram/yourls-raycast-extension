import { yourls } from "../lib/yourls";
import { GetCreateShortUrlResponse, TCreateShortUrlParams } from "../types";

export const createShortUrl = async (params: TCreateShortUrlParams) => {
  const res = await yourls<GetCreateShortUrlResponse>({
    action: "shorturl",
    params,
  });

  return res;
};
