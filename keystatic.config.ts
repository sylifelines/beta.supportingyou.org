import { config, fields, singleton } from "@keystatic/core";
import { nanoid } from 'nanoid';
import icons from "./src/data/icons.json";

const {
  icons: { "material-symbols": materialSymbols, "fa7-brands": fontAwesome },
} = icons;

export default config({
  storage: {
    kind: 'local',
    // kind: 'github',
    // repo: {
    //   owner: 'sylifelines',
    //   name: 'beta.supportingyou.org'
    // }
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
        lifelines: fields.array(
          fields.object({
            image: fields.image({
              label: 'Image',
              directory: 'src/assets',
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            id: fields.text({ label: "Automatic ID - JUST IGNORE", defaultValue: nanoid(6) }),
          }),
          {
            label: "Lifelines",
            slugField: "id",
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
        businessBenefits: fields.array(
          fields.object({
            image: fields.image({
              label: 'Image',
              directory: 'src/assets',
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            id: fields.text({ label: "Automatic ID - JUST IGNORE", defaultValue: nanoid(6) }),
          }),
          {
            label: "Benefits",
            slugField: "id",
            itemLabel: props => props.fields.title.value,
          },
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
          "fa7-brands": fields.array(
            fields.text({ label: "Tag" }),
            // Labelling options
            {
              label: "Fontawesome brands for use on the site",
              description: "[Material Icons](https://icon-sets.iconify.design/fa7-brands/)",
              itemLabel: props => props.value,
            },
          ),
        }),
      },
    }),
  }, // singletons end
}); // config end
