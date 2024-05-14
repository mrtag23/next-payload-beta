import type { CollectionConfig } from 'payload/types'
import Hero from "@/blocks/Hero";
import Accordion from "@/blocks/Accordion";

export const LandingPages: CollectionConfig = {
    slug: 'landing-pages',
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
        },
        {
            name: "components",
            type: "blocks",
            blocks: [Hero, Accordion],
            minRows: 1,
            maxRows: 10,
        }
    ],
}
