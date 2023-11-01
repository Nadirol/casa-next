export default {
    name: 'postCasa',
    type: 'document',
    title: 'Đăng Bài CASA',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tiêu đề'
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Tổng quan',
            description: 'Tóm tắt nội dung trong khoảng 10-30 từ.'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: "Nhấn 'Generate' sau khi nhập xong tiêu đề.",
            options: {
                source: 'title'
            }
        },
        {
            name: 'image',
            title: 'Hình ảnh',
            type: 'image',
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
            name: 'published',
            title: 'Hiển thị',
            type: 'boolean',
            description: 'Hiện/Ẩn bài viết trên trang web.'
        },
    ]

}