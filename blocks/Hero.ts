import { Block } from 'payload/types'

const Hero: Block = {
    slug: 'hero',
    fields: [
        {
            name: 'heroImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'heroTitle',
            type: 'text',
            required: true,
        },
        {
            name: 'heroSubtitle',
            type: 'text',
        },
        {
            name: 'heroBody',
            type: 'textarea',
        },
    ],
}

export default Hero;