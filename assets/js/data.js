// ===== SITE DATA & CONFIGURATION =====

export const siteConfig = {
    name: 'HUY BARBERSHOP',
    tagline: 'Nơi Phong Cách Được Tôn Vinh',
    description: 'Dạy nghề cắt tóc nam chuyên nghiệp và dịch vụ cắt tóc nam cao cấp',
    
    contact: {
        address: '123 Đường ABC, Quận XYZ, TP.HCM',
        phone: '0123 456 789',
        email: 'info@dongtaybarbershop.com',
        hours: '8:00 - 21:00 (Hàng ngày)'
    },
    
    social: {
        facebook: 'https://facebook.com/huybarbershop',
        instagram: 'https://instagram.com/huybarbershop',
        youtube: 'https://youtube.com/@huybarbershop',
        zalo: 'https://zalo.me/huybarbershop'
    }
};

export const navigation = [
    { name: 'TRANG CHỦ', href: 'index.html', id: 'home' },
    { name: 'ĐÀO TẠO', href: '#training', id: 'training' },
    { name: 'DỊCH VỤ', href: '#services', id: 'services' },
    { name: 'VỀ CHÚNG TÔI', href: '#about', id: 'about' },
    { name: 'LIÊN HỆ', href: '#contact', id: 'contact' }
];

export const services = [
    {
        id: 'haircut',
        icon: '✂️',
        title: 'Cắt Tóc Nam',
        description: 'Các kiểu tóc nam hiện đại, từ classic đến trendy, phù hợp với mọi phong cách.',
        price: '100.000đ - 200.000đ'
    },
    {
        id: 'shaving',
        icon: '💈',
        title: 'Cạo Râu',
        description: 'Dịch vụ cạo râu chuyên nghiệp với dao cạo truyền thống, mang lại trải nghiệm thư giãn.',
        price: '50.000đ - 100.000đ'
    },
    {
        id: 'training',
        icon: '🎓',
        title: 'Đào Tạo',
        description: 'Khóa học cắt tóc nam chuyên nghiệp, cam kết việc làm sau khóa học.',
        price: 'Liên hệ'
    },
    {
        id: 'massage',
        icon: '💆',
        title: 'Gội Đầu Massage',
        description: 'Dịch vụ gội đầu massage thư giãn, giúp giảm căng thẳng và chăm sóc tóc.',
        price: '50.000đ'
    },
    {
        id: 'coloring',
        icon: '🎨',
        title: 'Nhuộm Tóc',
        description: 'Nhuộm tóc nam với nhiều màu sắc thời thượng, sử dụng sản phẩm cao cấp.',
        price: '200.000đ - 500.000đ'
    },
    {
        id: 'styling',
        icon: '✨',
        title: 'Tạo Kiểu',
        description: 'Tạo kiểu tóc theo yêu cầu, phù hợp cho mọi sự kiện và phong cách cá nhân.',
        price: '100.000đ - 300.000đ'
    }
];

export const trainingProgram = {
    title: 'DẠY NGHỀ CẮT TÓC NAM',
    description: [
        'Dạy nghề cắt tóc nam chuyên nghiệp, bài bản từ cơ bản đến nâng cao, thực hành thực tế, rèn kỹ năng và thái độ. Tạo điều kiện các bạn có chỗ làm và thực hành khi hoàn thành.',
        'Chương trình đào tạo của chúng tôi được thiết kế để giúp học viên nắm vững các kỹ thuật cắt tóc hiện đại, kết hợp giữa phong cách truyền thống và xu hướng quốc tế. Với đội ngũ giảng viên giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết mang đến chất lượng đào tạo hàng đầu.'
    ],
    curriculum: [
        'Kỹ thuật cắt tóc cơ bản',
        'Các kiểu tóc nam phổ biến',
        'Kỹ thuật fade và undercut',
        'Cạo râu và tạo kiểu râu',
        'Tư vấn khách hàng',
        'Quản lý salon và kinh doanh'
    ],
    duration: '3 tháng',
    commitment: 'Hỗ trợ việc làm sau khóa học'
};

export const aboutContent = {
    title: 'Về Chúng Tôi',
    paragraphs: [
        '<strong>Đông Tây Barbershop</strong> là sự kết hợp hoàn hảo giữa nghệ thuật cắt tóc truyền thống phương Đông và phong cách hiện đại phương Tây. Chúng tôi tự hào là nơi mang đến trải nghiệm cắt tóc đẳng cấp và chuyên nghiệp nhất.',
        'Với hơn 10 năm kinh nghiệm trong nghề, đội ngũ barber của chúng tôi không chỉ là những người thợ cắt tóc giỏi mà còn là những nghệ sĩ, luôn cập nhật những xu hướng mới nhất để phục vụ quý khách hàng.',
        'Chúng tôi cam kết mang đến không chỉ là một mái tóc đẹp mà còn là một trải nghiệm thư giãn, thoải mái trong không gian sang trọng và lịch sự.'
    ],
    stats: [
        { number: '10+', label: 'Năm Kinh Nghiệm' },
        { number: '5000+', label: 'Khách Hàng Hài Lòng' },
        { number: '100+', label: 'Học Viên Đào Tạo' },
        { number: '15+', label: 'Barber Chuyên Nghiệp' }
    ]
};

export const testimonials = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        role: 'Khách hàng',
        content: 'Dịch vụ tuyệt vời, barber rất tận tâm và chuyên nghiệp. Tôi rất hài lòng với mái tóc mới của mình!',
        rating: 5
    },
    {
        id: 2,
        name: 'Trần Văn B',
        role: 'Học viên khóa đào tạo',
        content: 'Khóa học rất bổ ích, thầy giáo nhiệt tình và có tâm. Sau khóa học tôi đã có việc làm ổn định.',
        rating: 5
    },
    {
        id: 3,
        name: 'Lê Văn C',
        role: 'Khách hàng thường xuyên',
        content: 'Không gian thoải mái, sạch sẽ. Mỗi lần đến đây đều được phục vụ chu đáo. Rất đáng để thử!',
        rating: 5
    }
];

export const priceList = {
    basic: [
        { service: 'Cắt tóc nam cơ bản', price: '100.000' },
        { service: 'Cắt tóc + gội massage', price: '150.000' },
        { service: 'Cạo mặt', price: '50.000' },
        { service: 'Gội đầu massage', price: '50.000' }
    ],
    premium: [
        { service: 'Cắt tóc nam cao cấp', price: '200.000' },
        { service: 'Nhuộm tóc', price: '200.000 - 500.000' },
        { service: 'Uốn tóc', price: '300.000 - 600.000' },
        { service: 'Phục hồi tóc', price: '200.000 - 400.000' }
    ]
};