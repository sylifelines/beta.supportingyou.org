import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
const whatToDos = defineCollection({
  loader: file("src/data/whatToDo.json", { parser: (text) => JSON.parse(text).items }),
  schema: z.object({
    icon: z.string(),
    title: z.string(),
  }),
});


const lifelines = defineCollection({
  loader: file("src/data/communityBenefits.json", { parser: (text) => JSON.parse(text).items }),
  schema: ({ image }) => z.object({
    id: z.string(),
    image: z.nullable(image()),
    title: z.string(),
    description: z.string(),
  }),
});
export const collections = { whatToDos, lifelines };
