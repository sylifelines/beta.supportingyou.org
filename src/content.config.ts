import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";
import { sheetLoader } from "astro-sheet-loader";
// optionally import a transform function
// import { camelCase, snake_case } from "astro-sheet-loader";

const faqs = defineCollection({
  loader: sheetLoader({
    document: import.meta.env.GOOGLE_SHEET_URL, //"1wb2TbwRE-McOA663PGgf0InTsXC6b07ThEy_j6_MCDw",
    allowBlanks: true,
    sheet: '&headers=1'
  }),
  // if you don't define a schema yourself, it will be automatically generated
  schema: z.object({
    id: z.number(),
    answer: z.string(),
    question: z.string(),
  })
});

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

export const collections = { whatToDos, lifelines, businessBenefits, faqs };
