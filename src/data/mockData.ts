export const stores = [
  { id: '1', name: 'بيتزا هاوس', category: 'مطاعم', rating: 4.8, deliveryTime: '25-35 دقيقة', deliveryFee: 10, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&fit=crop', isOpen: true, minOrder: 50, description: 'بيتزا إيطالية أصلية' },
  { id: '2', name: 'برجر فاكتوري', category: 'مطاعم', rating: 4.6, deliveryTime: '20-30 دقيقة', deliveryFee: 8, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&fit=crop', isOpen: true, minOrder: 40, description: 'برجر منزلي الصنع غني بالنكهة' },
  { id: '3', name: 'سوشي تايم', category: 'مطاعم', rating: 4.9, deliveryTime: '30-45 دقيقة', deliveryFee: 15, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&fit=crop', isOpen: true, minOrder: 80, description: 'مطبخ ياباني طازج' },
  { id: '4', name: 'كافيه أطلس', category: 'مطاعم', rating: 4.7, deliveryTime: '15-25 دقيقة', deliveryFee: 5, image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&fit=crop', isOpen: true, minOrder: 30, description: 'مقهى ومخبوزات مغربية' },
  { id: '5', name: 'مارشيه فري', category: 'بقالة', rating: 4.5, deliveryTime: '20-30 دقيقة', deliveryFee: 12, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&fit=crop', isOpen: true, minOrder: 60, description: 'بقالة محلية طازجة' },
  { id: '6', name: 'الصيدلية المركزية', category: 'صيدلية', rating: 4.9, deliveryTime: '15-20 دقيقة', deliveryFee: 0, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&fit=crop', isOpen: true, minOrder: 20, description: 'أدوية ومنتجات صحية' },
  { id: '7', name: 'مخبزة فاس', category: 'مخبوزات', rating: 4.8, deliveryTime: '10-20 دقيقة', deliveryFee: 5, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&fit=crop', isOpen: true, minOrder: 25, description: 'خبز ومخبوزات طازجة' },
  { id: '8', name: 'ميني مارشيه', category: 'متجر صغير', rating: 4.3, deliveryTime: '10-15 دقيقة', deliveryFee: 7, image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&fit=crop', isOpen: false, minOrder: 30, description: 'مواد استهلاكية ووجبات خفيفة' },
];

export const menuItems = {
  '1': [ // Pizza House
    { id: 'p1', name: 'مارغريتا', description: 'صلصة طماطم كلاسيكية، موزاريلا طازجة، ريحان', price: 65, category: 'بيتزا', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&fit=crop' },
    { id: 'p2', name: 'بيبروني', description: 'صلصة طماطم، موزاريلا، بيبروني بقري حار', price: 75, category: 'بيتزا', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&fit=crop' },
    { id: 'p3', name: 'كواترو فورماجي', description: 'موزاريلا، غورغونزولا، بارميزان، إيمينتال', price: 85, category: 'بيتزا', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&fit=crop' },
    { id: 'p4', name: 'خبز بالثوم', description: 'خبز مخبوز بالفرن مع زبدة الثوم والأعشاب', price: 25, category: 'مقبلات', image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&fit=crop' },
    { id: 'p5', name: 'سلطة سيزر', description: 'خس روماني، خبز محمص، بارميزان، صوص سيزر', price: 45, category: 'سلطات', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&fit=crop' },
    { id: 'p6', name: 'تيراميسو', description: 'حلوى إيطالية كلاسيكية بنكهة القهوة', price: 35, category: 'حلويات', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&fit=crop' },
  ],
  '2': [ // Burger Factory
    { id: 'b1', name: 'تشيز برجر كلاسيك', description: 'لحم بقري، شيدر، خس، طماطم، صوص خاص', price: 55, category: 'برجر', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&fit=crop' },
    { id: 'b2', name: 'دبل سماش برجر', description: 'قطعتان لحم، جبن مضاعف، بصل مكرمل', price: 75, category: 'برجر', image: 'https://images.unsplash.com/photo-1594212887874-7ce70094e9f7?w=400&fit=crop' },
    { id: 'b3', name: 'دجاج مقرمش', description: 'صدر دجاج مقلي، كولسلو، مخلل، مايونيز حار', price: 60, category: 'برجر', image: 'https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?w=400&fit=crop' },
    { id: 'b4', name: 'بطاطس مقلية', description: 'بطاطس ذهبية مقرمشة مع توابل', price: 20, category: 'مقبلات', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&fit=crop' },
    { id: 'b5', name: 'حلقات البصل', description: 'حلقات بصل مقلية مع صوص رانش', price: 25, category: 'مقبلات', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&fit=crop' },
    { id: 'b6', name: 'ميلك شيك فانيليا', description: 'ميلك شيك غني مغطى بالكريمة المخفوقة', price: 30, category: 'مشروبات', image: 'https://images.unsplash.com/photo-1572490122747-3968b75bf699?w=400&fit=crop' },
  ],
  '4': [ // Cafe Atlas
    { id: 'c1', name: 'شاي مغربي بالنعناع', description: 'شاي أخضر تقليدي مع نعناع طازج', price: 15, category: 'مشروبات', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&fit=crop' },
    { id: 'c2', name: 'نص نص', description: 'نصف قهوة، نصف حليب ساخن', price: 18, category: 'مشروبات', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&fit=crop' },
    { id: 'c3', name: 'عصير برتقال طازج', description: 'عصير برتقال مغربي طازج', price: 20, category: 'مشروبات', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&fit=crop' },
    { id: 'c4', name: 'كرواسون', description: 'كرواسون بالزبدة مخبوز طازج يومياً', price: 12, category: 'مخبوزات', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&fit=crop' },
    { id: 'c5', name: 'مسمن', description: 'فطائر مغربية تقليدية مع العسل', price: 15, category: 'إفطار', image: 'https://images.unsplash.com/photo-1627366422329-a41753139366?w=400&fit=crop' },
    { id: 'c6', name: 'أفوكادو توست', description: 'أفوكادو مهروس على خبز مخمر مع بيضة مسلوقة', price: 45, category: 'إفطار', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&fit=crop' },
  ]
};

const fallbackMenu = [
    { id: 'f1', name: 'منتج 1', description: 'وصف المنتج 1', price: 30, category: 'تصنيف أ', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
    { id: 'f2', name: 'منتج 2', description: 'وصف المنتج 2', price: 45, category: 'تصنيف أ', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
    { id: 'f3', name: 'منتج 3', description: 'وصف المنتج 3', price: 25, category: 'تصنيف ب', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
    { id: 'f4', name: 'منتج 4', description: 'وصف المنتج 4', price: 60, category: 'تصنيف ب', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
];

export const getStoreMenu = (storeId: string) => {
  return menuItems[storeId as keyof typeof menuItems] || fallbackMenu;
};

export const driverOrders = [
  { id: 'ORD-8921', storeName: 'بيتزا هاوس', customerName: 'كريم ب.', distance: 2.4, earnings: 15, pickupArea: 'المعارف' },
  { id: 'ORD-8922', storeName: 'برجر فاكتوري', customerName: 'ياسين م.', distance: 1.2, earnings: 12, pickupArea: 'غوتيه' },
  { id: 'ORD-8923', storeName: 'كافيه أطلس', customerName: 'سارة ت.', distance: 4.5, earnings: 22, pickupArea: 'بوركون' },
];

export const merchantOrders = [
  { id: 'ORD-101', customerName: 'أمين ل.', items: [{ name: 'مارغريتا', qty: 1 }, { name: 'بطاطس', qty: 2 }], total: 105, status: 'جديد', timeElapsed: '2 دقيقة' },
  { id: 'ORD-102', customerName: 'خديجة ب.', items: [{ name: 'بيبروني', qty: 2 }], total: 150, status: 'جديد', timeElapsed: '5 دقيقة' },
  { id: 'ORD-103', customerName: 'مهدي س.', items: [{ name: 'سلطة سيزر', qty: 1 }], total: 45, status: 'قيد التحضير', timeElapsed: '12 دقيقة' },
  { id: 'ORD-104', customerName: 'صوفيا ن.', items: [{ name: 'كواترو فورماجي', qty: 1 }, { name: 'تيراميسو', qty: 2 }], total: 155, status: 'جاهز', timeElapsed: '25 دقيقة' },
];