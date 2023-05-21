import { GraphQLClient } from "graphql-request";
import siteConfig from "site-config";

export const ENDPOINT = siteConfig.backend_url + "/graphql";

export const client = new GraphQLClient(ENDPOINT, {
  // headers: {
  //   Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
  // },
});

export const gql = async <T = any>(
  query: TemplateStringsArray,
  ...vars: string[]
) => {
  let merged = "";
  for (let i = 0; i < vars.length; i++) {
    merged += query[i];
    merged += `${vars[i]}`;
  }
  merged += query[query.length - 1];

  return client.request<T>(merged);
};
