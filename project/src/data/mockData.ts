export const categories = [
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'mobiles', name: 'Mobiles', icon: '📱' },
  { id: 'electronics', name: 'Electronics', icon: '💻' },
  { id: 'home', name: 'Home & Kitchen', icon: '🏠' },
  { id: 'beauty', name: 'Beauty', icon: '💄' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'toys', name: 'Toys', icon: '🧸' }
];

export const platforms = {
  amazon: {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  flipkart: {
    name: 'Flipkart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flipkart_logo.png'
  },
  meesho: {
    name: 'Meesho',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Meesho_logo.png'
  },
  myntra: {
    name: 'Myntra',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Myntra_logo.png'
  },
  ajio: {
    name: 'Ajio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Ajio_logo.png'
  }
};

export const products = [
  // FASHION PRODUCTS (PRIORITY 1)
  // Myntra Women's Dress
  {
    id: 'fashion1',
    name: 'Women\'s Floral Summer Dress',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 1299, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' },
      { platform: 'Amazon', price: 1499, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Ajio', price: 1399, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' }
    ],
    rating: 4.6,
    reviews: 2100,
    category: 'fashion',
    description: 'Beautiful floral print dress perfect for summer occasions.'
  },
  // Amazon Men's Shirt
  {
    id: 'fashion2',
    name: 'Men\'s Formal Cotton Shirt',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 899, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 799, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Myntra', price: 999, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' }
    ],
    rating: 4.4,
    reviews: 1800,
    category: 'fashion',
    description: 'Premium cotton formal shirt for professional look.'
  },
  // Meesho Kurti
  {
    id: 'fashion3',
    name: 'Trendy Women Kurti',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Meesho', price: 499, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' },
      { platform: 'Ajio', price: 599, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' },
      { platform: 'Amazon', price: 549, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.3,
    reviews: 1200,
    category: 'fashion',
    description: 'Stylish and comfortable kurti for daily wear.'
  },
  // Myntra Jeans
  {
    id: 'fashion4',
    name: "Levi's 511 Slim Fit Jeans",
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 2999, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' },
      { platform: 'Ajio', price: 3199, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' },
      { platform: 'Amazon', price: 3099, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.4,
    reviews: 1500,
    category: 'fashion',
    description: 'Classic slim fit jeans for everyday style.'
  },
  // Ajio Jacket
  {
    id: 'fashion5',
    name: 'Roadster Men Solid Jacket',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Ajio', price: 1999, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' },
      { platform: 'Myntra', price: 2199, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' },
      { platform: 'Flipkart', price: 2099, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.2,
    reviews: 700,
    category: 'fashion',
    description: 'Trendy and warm jacket for men.'
  },
  // Myntra Shoes
  {
    id: 'fashion6',
    name: 'Nike Air Max 270 Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 12995, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' },
      { platform: 'Amazon', price: 13495, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 13295, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.6,
    reviews: 1100,
    category: 'fashion',
    description: 'Comfortable running shoes with Max Air unit.'
  },
  // Additional Fashion Products
  {
    id: 'fashion7',
    name: 'Women\'s Ethnic Saree',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Meesho', price: 899, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' },
      { platform: 'Amazon', price: 1099, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Ajio', price: 999, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' }
    ],
    rating: 4.5,
    reviews: 850,
    category: 'fashion',
    description: 'Elegant ethnic saree for traditional occasions.'
  },
  {
    id: 'fashion8',
    name: 'Adidas Sports T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Flipkart', price: 899, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 999, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Myntra', price: 949, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' }
    ],
    rating: 4.3,
    reviews: 650,
    category: 'fashion',
    description: 'Comfortable sports t-shirt for active lifestyle.'
  },

  // MOBILE PRODUCTS (PRIORITY 2)
  // Amazon iPhone
  {
    id: 'mobile1',
    name: 'Apple iPhone 15 Pro Max',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 134900, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 132900, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Meesho', price: 135900, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' }
    ],
    rating: 4.8,
    reviews: 3200,
    category: 'mobiles',
    description: 'The latest iPhone with A17 Pro chip and titanium design.'
  },
  // Flipkart Samsung
  {
    id: 'mobile2',
    name: 'Samsung Galaxy S24 Ultra',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Flipkart', price: 122999, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 124999, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.6,
    reviews: 1800,
    category: 'mobiles',
    description: 'Flagship Android phone with S Pen and pro cameras.'
  },
  // Additional Mobile Products
  {
    id: 'mobile3',
    name: 'OnePlus 12R',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 39999, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 38999, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.5,
    reviews: 1200,
    category: 'mobiles',
    description: 'Premium Android phone with Hasselblad cameras.'
  },
  {
    id: 'mobile4',
    name: 'Xiaomi Redmi Note 13 Pro',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Flipkart', price: 24999, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 25999, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Meesho', price: 23999, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' }
    ],
    rating: 4.4,
    reviews: 950,
    category: 'mobiles',
    description: 'Budget-friendly smartphone with great features.'
  },

  // ELECTRONICS PRODUCTS (PRIORITY 3)
  // Amazon Headphones
  {
    id: 'electronics1',
    name: 'Sony WH-1000XM5 Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 29990, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 28990, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Meesho', price: 31990, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' }
    ],
    rating: 4.7,
    reviews: 2100,
    category: 'electronics',
    description: 'Industry-leading noise canceling headphones.'
  },
  // Flipkart TV
  {
    id: 'electronics2',
    name: 'LG 55" 4K OLED Smart TV',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Flipkart', price: 136990, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 139990, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.5,
    reviews: 900,
    category: 'electronics',
    description: 'Premium OLED TV with vibrant colors and smart features.'
  },
  // Additional Electronics
  {
    id: 'electronics3',
    name: 'MacBook Air M2',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 89990, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 87990, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.8,
    reviews: 1500,
    category: 'electronics',
    description: 'Ultra-thin laptop with M2 chip and all-day battery.'
  },
  {
    id: 'electronics4',
    name: 'Canon EOS R6 Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 189990, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 184990, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.6,
    reviews: 450,
    category: 'electronics',
    description: 'Professional mirrorless camera for photography enthusiasts.'
  },

  // HOME PRODUCTS (PRIORITY 4)
  // Meesho Fairy Lights
  {
    id: 'home1',
    name: 'Home Decor Fairy Lights',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Meesho', price: 299, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' },
      { platform: 'Flipkart', price: 349, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 329, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.5,
    reviews: 800,
    category: 'home',
    description: 'Beautiful fairy lights to decorate your home.'
  },
  // Ajio Vase
  {
    id: 'home2',
    name: 'Home Centre Ceramic Vase',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Ajio', price: 899, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' },
      { platform: 'Meesho', price: 999, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' },
      { platform: 'Amazon', price: 949, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.5,
    reviews: 400,
    category: 'home',
    description: 'Elegant ceramic vase for home decor.'
  },
  // Additional Home Products
  {
    id: 'home3',
    name: 'Philips Air Fryer',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 4999, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 4799, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.4,
    reviews: 1200,
    category: 'home',
    description: 'Healthy cooking with less oil and more taste.'
  },
  {
    id: 'home4',
    name: 'Dyson V15 Vacuum Cleaner',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 45990, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 44990, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.7,
    reviews: 650,
    category: 'home',
    description: 'Cordless vacuum cleaner with powerful suction.'
  },

  // BEAUTY PRODUCTS
  {
    id: 'beauty1',
    name: 'Lakme 9 to 5 Foundation',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 599, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 549, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Myntra', price: 649, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' }
    ],
    rating: 4.3,
    reviews: 2100,
    category: 'beauty',
    description: 'Long-lasting foundation for professional look.'
  },
  {
    id: 'beauty2',
    name: 'Maybelline Mascara',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 399, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' },
      { platform: 'Amazon', price: 449, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 379, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.5,
    reviews: 1800,
    category: 'beauty',
    description: 'Volumizing mascara for dramatic lashes.'
  },

  // SPORTS PRODUCTS
  {
    id: 'sports1',
    name: 'Nike Football',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Flipkart', price: 1299, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 1399, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Myntra', price: 1199, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' }
    ],
    rating: 4.4,
    reviews: 750,
    category: 'sports',
    description: 'Professional football for outdoor games.'
  },
  {
    id: 'sports2',
    name: 'Yoga Mat Premium',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 899, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 799, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Meesho', price: 699, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' }
    ],
    rating: 4.2,
    reviews: 450,
    category: 'sports',
    description: 'Non-slip yoga mat for comfortable practice.'
  },

  // BOOKS
  {
    id: 'books1',
    name: 'Atomic Habits by James Clear',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 399, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 349, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.8,
    reviews: 3200,
    category: 'books',
    description: 'Transform your life with tiny changes.'
  },
  {
    id: 'books2',
    name: 'Rich Dad Poor Dad',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Flipkart', price: 299, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 349, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.6,
    reviews: 2800,
    category: 'books',
    description: 'Learn about money and financial literacy.'
  },

  // TOYS
  {
    id: 'toys1',
    name: 'LEGO Star Wars Set',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 2999, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Flipkart', price: 2799, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.7,
    reviews: 850,
    category: 'toys',
    description: 'Build your own Star Wars universe.'
  },
  {
    id: 'toys2',
    name: 'Remote Control Car',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Flipkart', price: 1499, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' },
      { platform: 'Amazon', price: 1599, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' },
      { platform: 'Meesho', price: 1299, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' }
    ],
    rating: 4.3,
    reviews: 650,
    category: 'toys',
    description: 'High-speed RC car for kids and adults.'
  }
];

export const trendingDeals = products.slice(0, 4);
export const bestDeals = products.slice(2, 6);

export const getTopDealsByPlatform = (platformName: string, count: number = 4) => {
  return products.filter(product =>
    product.prices.some(p => p.platform.toLowerCase() === platformName.toLowerCase())
  ).slice(0, count);
};