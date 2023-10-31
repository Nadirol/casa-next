export default {
    name: 'tour',
    type: 'document',
    title: 'Tour',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tiêu đề'
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
            name: 'destinations',
            type: 'array',
            title: 'Điểm tới',
            of: [{ type: 'string' }]
        },
        {
            name: 'days',
            type: 'number',
            title: 'Số ngày'
        },
        {
            name: 'nights',
            type: 'number',
            title: 'Số đêm'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Giá',
            description: 'vnđ'
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
        },
        {
            name: 'itinerary',
            type: 'array',
            title: 'Lộ trình',
            of: [
                {
                    name: 'day',
                    type: 'object',
                    fields: [
                        { type: "string", name: "title", title: "Tiêu đề" },
                        {
                            title: 'Content', 
                            name: 'content',
                            type: 'array', 
                            of: [
                                { type: 'block' },                 
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
            ]
        }
    ]

}