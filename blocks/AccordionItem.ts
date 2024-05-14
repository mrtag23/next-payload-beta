import { Block } from 'payload/types'

const AccordionItem: Block = {
    slug: 'accordion-item',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'body',
            type: 'textarea',
        },
    ],
}

export default AccordionItem;