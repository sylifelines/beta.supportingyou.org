// keystatic.config.ts
import { config, fields, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    singletons: {
        hero: singleton({
            label: 'Hero Section',
            path: 'src/data/hero',
            format: 'json',
            schema: {
                // items: fields.array(
                // data:    fields.object({
                heading: fields.text({ label: 'Heading' }),
                subheading: fields.text({ label: 'Sub Heading' }),
                buttonText: fields.text({ label: 'Button Text' }),
                // }),
                // ),
            },
        }), // hero end
        community: singleton({
            label: 'Community Benefits Section',
            path: 'src/data/communityBenefits',
            format: 'json',
            schema: {
                heading: fields.text({ label: 'Heading' }),
                subheading: fields.text({ label: 'Sub Heading' }),
                buttonText: fields.text({ label: 'Button Text' }),
                items: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Title' }),
                        description: fields.text({ label: 'Description' }),
                    }),{
                        label: 'Lifelines',
                        slugField: 'title',
                        itemLabel: props => props.fields.title.value,
                    }
                ),
            }
        }), // community end
    } // singletons end
}) // config end
