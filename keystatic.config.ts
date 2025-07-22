import { config, fields, singleton } from "@keystatic/core";
import { nanoid } from 'nanoid';
import icons from "./src/data/icons.json";

const {
  icons: { "material-symbols": materialSymbols },
} = icons;

export default config({
  storage: {
    kind: 'local',
    // kind: 'cloud',
  },
  cloud: {
    project: 'sylifelines/supportingyou',
  },
  singletons: {
    hero: singleton({
      label: "Hero Section",
      path: "./src/data/hero",
      format: "json",
      schema: {
        heading: fields.text({ label: "Heading" }),
        subheading: fields.text({ label: "Sub Heading" }),
        buttonText: fields.text({ label: "Button Text" }),
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
            itemLabel: props => props.fields.title.value,
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
            id: fields.text({ label: "Automatic ID - JUST IGNORE", defaultValue: nanoid() }),
          }),
          {
              label: "What To Dos",
              slugField: "id",
              itemLabel: props => props.fields.title.value,
          }
        ),
      },
    }),
    businessBenefits: singleton({
      label: "Business Benefits Section",
      path: "src/data/businessBenefits",
      format: "json",
      schema: {
        heading: fields.text({ label: "Heading" }),
        subheading: fields.text({ label: "Sub Heading" }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
          }),
          {
              label: "Benefits",
              slugField: "title",
              itemLabel: props => props.fields.title.value,
          }
        ),
      },
    }),
    whatNext: singleton({
      label: "What Next Section",
      path: "src/data/whatNext",
      format: "json",
      schema: {
        heading: fields.text({ label: "Heading" }),
        subheading: fields.text({ label: "Sub Heading" }),
        buttonText: fields.text({ label: "Buttin Text" }),
        items: fields.array(
          fields.object({
            text: fields.text({ label: "Title" }),
          }),
          {
              label: "Benefits",
              slugField: "text",
              itemLabel: props => props.fields.text.value,
          }
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
              label: "Material Icons for use on the site",
              description: "[Material Icons](https://icon-sets.iconify.design/material-symbols/)",
              itemLabel: props => props.value,
            },
          ),
        }),
      },
    }),
  }, // singletons end
}); // config end
