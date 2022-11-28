import { createClient } from "next-sanity";

// config
export const config = {
  dataset: process.env.NEXT_PUBLIIC_SANITY_DATABASE || "production",
  projectId: process.env.NEXT_PUBLIIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
