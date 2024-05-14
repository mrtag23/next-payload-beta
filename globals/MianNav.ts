import type { GlobalConfig } from 'payload/types'

export const MainNav: GlobalConfig = {
    slug: 'main-nav',
    fields: [
        {
            name: 'mainNavItems',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true
                },
                {
                    name: 'url',
                    type: 'text',
                    required: true
                }
            ],
            maxRows: 6,
            type: 'array',
        }
    ],
}