export const categories = [
  { id: 'mobiles', name: 'Mobiles', icon: '📱' },
  { id: 'fashion', name: 'Fashion', icon: '👕' },
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
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=32&h=32&fit=crop&crop=center'
  },
  flipkart: {
    name: 'Flipkart',
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=32&h=32&fit=crop&crop=center'
  },
  meesho: {
    name: 'Meesho',
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=32&h=32&fit=crop&crop=center'
  },
  myntra: {
    name: 'Myntra',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=32&h=32&fit=crop&crop=center'
  },
  ajio: {
    name: 'Ajio',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=32&h=32&fit=crop&crop=center'
  }
};

export const products = [
  // Amazon iPhone (with price comparison)
  {
    id: 'a1',
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
  // Amazon Headphones (with price comparison)
  {
    id: 'a2',
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
  // Flipkart Mobile (with price comparison)
  {
    id: 'f1',
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
  // Flipkart TV (with price comparison)
  {
    id: 'f2',
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
  // Meesho Kurti (with price comparison)
  {
    id: 'm1',
    name: 'Trendy Women Kurti',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Meesho', price: 499, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' },
      { platform: 'Ajio', price: 599, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' }
    ],
    rating: 4.3,
    reviews: 1200,
    category: 'fashion',
    description: 'Stylish and comfortable kurti for daily wear.'
  },
  // Meesho Fairy Lights (with price comparison)
  {
    id: 'm2',
    name: 'Home Decor Fairy Lights',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Meesho', price: 299, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' },
      { platform: 'Flipkart', price: 349, logo: platforms.flipkart.logo, url: 'https://www.flipkart.com/' }
    ],
    rating: 4.5,
    reviews: 800,
    category: 'home',
    description: 'Beautiful fairy lights to decorate your home.'
  },
  // Myntra Jeans (with price comparison)
  {
    id: 'my1',
    name: "Levi's 511 Slim Fit Jeans",
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 2999, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' },
      { platform: 'Ajio', price: 3199, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' }
    ],
    rating: 4.4,
    reviews: 1500,
    category: 'fashion',
    description: 'Classic slim fit jeans for everyday style.'
  },
  // Myntra Shoes (with price comparison)
  {
    id: 'my2',
    name: 'Nike Air Max 270 Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 12995, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' },
      { platform: 'Amazon', price: 13495, logo: platforms.amazon.logo, url: 'https://www.amazon.in/' }
    ],
    rating: 4.6,
    reviews: 1100,
    category: 'fashion',
    description: 'Comfortable running shoes with Max Air unit.'
  },
  // Ajio Jacket (with price comparison)
  {
    id: 'aj1',
    name: 'Roadster Men Solid Jacket',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Ajio', price: 1999, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' },
      { platform: 'Myntra', price: 2199, logo: platforms.myntra.logo, url: 'https://www.myntra.com/' }
    ],
    rating: 4.2,
    reviews: 700,
    category: 'fashion',
    description: 'Trendy and warm jacket for men.'
  },
  // Ajio Vase (with price comparison)
  {
    id: 'aj2',
    name: 'Home Centre Ceramic Vase',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Ajio', price: 899, logo: platforms.ajio.logo, url: 'https://www.ajio.com/' },
      { platform: 'Meesho', price: 999, logo: platforms.meesho.logo, url: 'https://www.meesho.com/' }
    ],
    rating: 4.5,
    reviews: 400,
    category: 'home',
    description: 'Elegant ceramic vase for home decor.'
  }
];

export const trendingDeals = products.slice(0, 4);
export const bestDeals = products.slice(2, 6);

export const getTopDealsByPlatform = (platformName: string, count: number = 4) => {
  return products.filter(product =>
    product.prices.some(p => p.platform.toLowerCase() === platformName.toLowerCase())
  ).slice(0, count);
};