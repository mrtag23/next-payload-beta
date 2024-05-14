import { Block } from 'payload/types'
import AccordionItem from "@/blocks/AccordionItem";

const Accordion: Block = {
    slug: 'accordion',
    fields: [
        {
            name: 'type',
            type: 'select',
            options: ['single', 'multiple'],
            required: true,
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'body',
            type: 'textarea',
        },
        {
            name: 'items',
            type: 'blocks',
            blocks: [AccordionItem],
            required: true
        }
    ],
}

export default Accordion;