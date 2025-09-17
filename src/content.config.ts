import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

type Lifeline = {
  image: string;
  secondaryImage?: string;
  title: string;
  description: string;
  headline?: string;
  bth?: string[];
  syheadline?: string;
  sybold?: string;
  sy?: string[];
  testimonial?: string[];
  id: string;
};

type BusinessBenefit = {
  image: string;
  title: string;
  id: string;
};

const whatToDos = defineCollection({
  loader: file("src/data/whatToDo.json", {
    parser: (text) => JSON.parse(text).items,
  }),
  schema: z.object({
    icon: z.string(),
    title: z.string(),
  }),
});

const businessBenefits = defineCollection({
  loader: file("src/data/businessBenefits.json", {
    parser: (text) => {
      let items = JSON.parse(text).businessBenefits;
      return items.map((item: BusinessBenefit) => ({
        ...item,
        image: `@assets/${item.image}`,
      }));
    },
  }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      image: z.nullable(image()),
      title: z.string(),
    }),
});

const lifelines = defineCollection({
  loader: file("src/data/communityBenefits.json", {
    parser: (text) => {
      let items = JSON.parse(text).lifelines;
      return items.map((item: Lifeline) => ({
        ...item,
        image: `@assets/${item.image}`,
        secondaryImage: `@assets/${item.secondaryImage}`,
      }));
    },
  }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      image: z.nullable(image()),
      secondaryImage: z.nullable(image()),
      title: z.string(),
      headline: z.string(),
      bth: z.array(z.string()),
      syheadline: z.string(),
      sybold: z.string(),
      sy: z.array(z.string()),
      testimonial: z.optional(z.array(z.string())),
      description: z.string(),
    }),
});

export const collections = { whatToDos, lifelines, businessBenefits };
