import { config, fields, singleton } from "@keystatic/core";

import icons from "./src/data/icons.json";
const {
  icons: { "material-symbols": materialSymbols },
} = icons;

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    hero: singleton({
      label: "Hero Section",
      path: "./src/data/hero",
      format: "json",
      schema: {
        // items: fields.array(
        // data:    fields.object({
        heading: fields.text({ label: "Heading" }),
        subheading: fields.text({ label: "Sub Heading" }),
        buttonText: fields.text({ label: "Button Text" }),
        // }),
        // ),
      },
    }), // hero end
    community: singleton({
      label: "Community Benefits Section",
      path: "src/data/communityBenefits",
      format: "json",
      schema: {
        heading: fields.text({ label: "Heading" }),
        subheading: fields.text({ label: "Sub Heading" }),
        buttonText: fields.text({ label: "Button Text" }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
          }),
          {
            label: "Lifelines",
            slugField: "title",
            itemLabel: (props) => props.fields.title.value,
          },
        ),
      },
    }), // community end
    whatToDo: singleton({
      label: "What to Do Section",
      path: "src/data/whatToDo",
      format: "json",
      schema: {
        heading: fields.text({ label: "Heading" }),
        items: fields.array(
          fields.object({
            icon: fields.select({
              label: "Icon",
              description: "The material symbol to use for this item",
              options: materialSymbols.map((i) => ({
                label: i,
                value: `material-symbols:${i}`,
              })),
              defaultValue: `material-symbols:${materialSymbols[0]}`,
            }),
            title: fields.text({ label: "Title" }),
          }),
        ),
      },
    }),
    icons: singleton({
      label: "Icons",
      path: "./src/data/icons",
      format: "json",
      schema: {
        icons: fields.object({
          "material-symbols": fields.array(
            fields.text({ label: "Tag" }),
            // Labelling options
            {
              label: "Material Icon",
              itemLabel: (props) => props.value,
            },
          ),
        }),
      },
    }),
  }, // singletons end
}); // config end
