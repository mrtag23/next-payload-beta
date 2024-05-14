// @ts-nocheck
import type { CollectionConfig } from 'payload/types'
import {
    HTMLConverterFeature,
    lexicalEditor,
    lexicalHTML
} from '@payloadcms/richtext-lexical'

export const Articles: CollectionConfig = {
    slug: 'articles',
    fields: [
        {
            name: "title",
            type: "text"
        },
        {
            required: true,
            name: "body",
            type: "richText",
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                    HTMLConverterFeature({}),
                ],
            }),
        },
        lexicalHTML('body', { name: 'body_html' }),
        {
            name: 'slug',
            type: "text",
        },
    ],
}
