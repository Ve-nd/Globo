export const stores = [
  { id: '1', name: 'Pizza House', category: 'restaurants', rating: 4.8, deliveryTime: '25-35 min', deliveryFee: 10, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&fit=crop', isOpen: true, minOrder: 50, description: 'Authentic Italian pizzas' },
  { id: '2', name: 'Burger Factory', category: 'restaurants', rating: 4.6, deliveryTime: '20-30 min', deliveryFee: 8, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&fit=crop', isOpen: true, minOrder: 40, description: 'Juicy handcrafted burgers' },
  { id: '3', name: 'Sushi Time', category: 'restaurants', rating: 4.9, deliveryTime: '30-45 min', deliveryFee: 15, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&fit=crop', isOpen: true, minOrder: 80, description: 'Fresh Japanese cuisine' },
  { id: '4', name: 'Café Atlas', category: 'restaurants', rating: 4.7, deliveryTime: '15-25 min', deliveryFee: 5, image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&fit=crop', isOpen: true, minOrder: 30, description: 'Moroccan café & pastries' },
  { id: '5', name: 'Marché Frais', category: 'grocery', rating: 4.5, deliveryTime: '20-30 min', deliveryFee: 12, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&fit=crop', isOpen: true, minOrder: 60, description: 'Fresh local groceries' },
  { id: '6', name: 'Pharmacie Centrale', category: 'pharmacy', rating: 4.9, deliveryTime: '15-20 min', deliveryFee: 0, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&fit=crop', isOpen: true, minOrder: 20, description: 'Medicines & health products' },
  { id: '7', name: 'Boulangerie Fès', category: 'bakery', rating: 4.8, deliveryTime: '10-20 min', deliveryFee: 5, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&fit=crop', isOpen: true, minOrder: 25, description: 'Freshly baked bread & pastries' },
  { id: '8', name: 'Mini Marché', category: 'convenience', rating: 4.3, deliveryTime: '10-15 min', deliveryFee: 7, image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&fit=crop', isOpen: false, minOrder: 30, description: 'Convenience items & snacks' },
];

export const menuItems = {
  '1': [ // Pizza House
    { id: 'p1', name: 'Margherita', description: 'Classic tomato sauce, fresh mozzarella, basil', price: 65, category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&fit=crop' },
    { id: 'p2', name: 'Pepperoni', description: 'Tomato sauce, mozzarella, spicy beef pepperoni', price: 75, category: 'Pizzas', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&fit=crop' },
    { id: 'p3', name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmesan, emmental', price: 85, category: 'Pizzas', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&fit=crop' },
    { id: 'p4', name: 'Garlic Bread', description: 'Oven-baked bread with garlic butter and herbs', price: 25, category: 'Sides', image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&fit=crop' },
    { id: 'p5', name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan, caesar dressing', price: 45, category: 'Salads', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&fit=crop' },
    { id: 'p6', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: 35, category: 'Desserts', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&fit=crop' },
  ],
  '2': [ // Burger Factory
    { id: 'b1', name: 'Classic Cheeseburger', description: 'Beef patty, cheddar, lettuce, tomato, house sauce', price: 55, category: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&fit=crop' },
    { id: 'b2', name: 'Double Smash Burger', description: 'Two smashed patties, double cheese, caramelized onions', price: 75, category: 'Burgers', image: 'https://images.unsplash.com/photo-1594212887874-7ce70094e9f7?w=400&fit=crop' },
    { id: 'b3', name: 'Crispy Chicken', description: 'Fried chicken breast, coleslaw, pickles, spicy mayo', price: 60, category: 'Burgers', image: 'https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?w=400&fit=crop' },
    { id: 'b4', name: 'French Fries', description: 'Crispy golden fries with seasoning', price: 20, category: 'Sides', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&fit=crop' },
    { id: 'b5', name: 'Onion Rings', description: 'Beer-battered onion rings with ranch dip', price: 25, category: 'Sides', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&fit=crop' },
    { id: 'b6', name: 'Vanilla Shake', description: 'Thick milkshake topped with whipped cream', price: 30, category: 'Drinks', image: 'https://images.unsplash.com/photo-1572490122747-3968b75bf699?w=400&fit=crop' },
  ],
  '4': [ // Cafe Atlas
    { id: 'c1', name: 'Moroccan Mint Tea', description: 'Traditional green tea with fresh mint', price: 15, category: 'Drinks', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&fit=crop' },
    { id: 'c2', name: 'Nous Nous', description: 'Half espresso, half steamed milk', price: 18, category: 'Drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&fit=crop' },
    { id: 'c3', name: 'Fresh Orange Juice', description: 'Freshly squeezed Moroccan oranges', price: 20, category: 'Drinks', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&fit=crop' },
    { id: 'c4', name: 'Croissant', description: 'Butter croissant baked fresh daily', price: 12, category: 'Pastries', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&fit=crop' },
    { id: 'c5', name: 'Msemen', description: 'Traditional Moroccan flatbread with honey', price: 15, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1627366422329-a41753139366?w=400&fit=crop' },
    { id: 'c6', name: 'Avocado Toast', description: 'Smashed avocado on sourdough with poached egg', price: 45, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&fit=crop' },
  ]
};

// Fallback menu for stores without specific menus
const fallbackMenu = [
    { id: 'f1', name: 'Product 1', description: 'Description for product 1', price: 30, category: 'Category A', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
    { id: 'f2', name: 'Product 2', description: 'Description for product 2', price: 45, category: 'Category A', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
    { id: 'f3', name: 'Product 3', description: 'Description for product 3', price: 25, category: 'Category B', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
    { id: 'f4', name: 'Product 4', description: 'Description for product 4', price: 60, category: 'Category B', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&fit=crop' },
];

export const getStoreMenu = (storeId: string) => {
  return menuItems[storeId as keyof typeof menuItems] || fallbackMenu;
};

export const driverOrders = [
  { id: 'ORD-8921', storeName: 'Pizza House', customerName: 'Karim B.', distance: 2.4, earnings: 15, pickupArea: 'Maarif' },
  { id: 'ORD-8922', storeName: 'Burger Factory', customerName: 'Yassine M.', distance: 1.2, earnings: 12, pickupArea: 'Gauthier' },
  { id: 'ORD-8923', storeName: 'Café Atlas', customerName: 'Sara T.', distance: 4.5, earnings: 22, pickupArea: 'Bourgogne' },
];

export const merchantOrders = [
  { id: 'ORD-101', customerName: 'Amine L.', items: [{ name: 'Margherita', qty: 1 }, { name: 'Fries', qty: 2 }], total: 105, status: 'new', timeElapsed: '2 min' },
  { id: 'ORD-102', customerName: 'Khadija B.', items: [{ name: 'Pepperoni', qty: 2 }], total: 150, status: 'new', timeElapsed: '5 min' },
  { id: 'ORD-103', customerName: 'Mehdi S.', items: [{ name: 'Caesar Salad', qty: 1 }], total: 45, status: 'preparing', timeElapsed: '12 min' },
  { id: 'ORD-104', customerName: 'Sofia N.', items: [{ name: 'Quattro Formaggi', qty: 1 }, { name: 'Tiramisu', qty: 2 }], total: 155, status: 'ready', timeElapsed: '25 min' },
];