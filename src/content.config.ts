import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders'; 

const whatToDos = defineCollection({
  loader: file("src/data/whatToDo.json", { parser: (text) => JSON.parse(text).items }),
  schema: z.object({
    icon: z.string(),
    title: z.string(),
  }),
});

export const collections = { whatToDos };
