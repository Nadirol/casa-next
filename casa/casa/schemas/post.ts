export default {
    name: 'post',
    type: 'document',
    title: 'Bài viết',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tiêu đề'
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Tổng quan'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Nội dung',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text'
                        }
                    ]
                }
            ]
        }
    ]

}