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
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB Natural Titanium',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 134900, logo: platforms.amazon.logo, url: '#' },
      { platform: 'Flipkart', price: 132900, logo: platforms.flipkart.logo, url: '#' },
      { platform: 'Meesho', price: 135900, logo: platforms.meesho.logo, url: '#' }
    ],
    rating: 4.5,
    reviews: 2847,
    category: 'mobiles',
    description: 'The ultimate iPhone with A17 Pro chip, titanium design, and advanced camera system.'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 512GB Titanium Black',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 124999, logo: platforms.amazon.logo, url: '#' },
      { platform: 'Flipkart', price: 122999, logo: platforms.flipkart.logo, url: '#' },
      { platform: 'Myntra', price: 126999, logo: platforms.myntra.logo, url: '#' }
    ],
    rating: 4.4,
    reviews: 1923,
    category: 'mobiles',
    description: 'Premium Android flagship with S Pen, incredible cameras, and all-day battery.'
  },
  {
    id: '3',
    name: 'MacBook Air M3 13-inch 256GB Space Gray',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 114900, logo: platforms.amazon.logo, url: '#' },
      { platform: 'Flipkart', price: 116900, logo: platforms.flipkart.logo, url: '#' },
      { platform: 'Ajio', price: 115900, logo: platforms.ajio.logo, url: '#' }
    ],
    rating: 4.7,
    reviews: 3456,
    category: 'electronics',
    description: 'Ultra-thin, lightweight laptop powered by Apple M3 chip for incredible performance.'
  },
  {
    id: '4',
    name: "Levi's 511 Slim Fit Jeans Dark Blue",
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 2999, logo: platforms.myntra.logo, url: '#' },
      { platform: 'Ajio', price: 2799, logo: platforms.ajio.logo, url: '#' },
      { platform: 'Meesho', price: 3199, logo: platforms.meesho.logo, url: '#' }
    ],
    rating: 4.2,
    reviews: 8764,
    category: 'fashion',
    description: 'Classic slim fit jeans perfect for everyday wear with premium denim quality.'
  },
  {
    id: '5',
    name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 29990, logo: platforms.amazon.logo, url: '#' },
      { platform: 'Flipkart', price: 28990, logo: platforms.flipkart.logo, url: '#' },
      { platform: 'Meesho', price: 31990, logo: platforms.meesho.logo, url: '#' }
    ],
    rating: 4.6,
    reviews: 5432,
    category: 'electronics',
    description: 'Industry-leading noise canceling with exceptional sound quality and comfort.'
  },
  {
    id: '6',
    name: 'Nike Air Max 270 Running Shoes Black White',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Myntra', price: 12995, logo: platforms.myntra.logo, url: '#' },
      { platform: 'Ajio', price: 11995, logo: platforms.ajio.logo, url: '#' },
      { platform: 'Amazon', price: 13495, logo: platforms.amazon.logo, url: '#' }
    ],
    rating: 4.3,
    reviews: 6789,
    category: 'fashion',
    description: 'Comfortable running shoes with Max Air unit for all-day comfort and style.'
  },
  {
    id: '7',
    name: 'LG 55" 4K OLED Smart TV C3 Series',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 139990, logo: platforms.amazon.logo, url: '#' },
      { platform: 'Flipkart', price: 136990, logo: platforms.flipkart.logo, url: '#' },
      { platform: 'Meesho', price: 142990, logo: platforms.meesho.logo, url: '#' }
    ],
    rating: 4.5,
    reviews: 2156,
    category: 'electronics',
    description: 'Premium OLED TV with perfect blacks, vibrant colors, and smart features.'
  },
  {
    id: '8',
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker 6Qt',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    prices: [
      { platform: 'Amazon', price: 8999, logo: platforms.amazon.logo, url: '#' },
      { platform: 'Flipkart', price: 8499, logo: platforms.flipkart.logo, url: '#' },
      { platform: 'Meesho', price: 9499, logo: platforms.meesho.logo, url: '#' }
    ],
    rating: 4.4,
    reviews: 12456,
    category: 'home',
    description: 'Multi-functional pressure cooker that replaces 7 kitchen appliances.'
  }
];

export const trendingDeals = products.slice(0, 4);
export const bestDeals = products.slice(2, 6);