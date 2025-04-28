import { CategoryStat, TrendItem, TrendDetail, TechTool, TechSubcategory } from '@/types/trends';

// Category Statistics
export const categoryStats: CategoryStat[] = [
  {
    category: 'fashion',
    count: 142,
    growth: 15,
    icon: 'shirt',
    color: '#EC4899'
  },
  {
    category: 'gadgets',
    count: 89,
    growth: 28,
    icon: 'smartphone',
    color: '#0EA5E9'
  },
  {
    category: 'decoration',
    count: 76,
    growth: 9,
    icon: 'lamp',
    color: '#8B5CF6'
  },
  {
    category: 'photography',
    count: 103,
    growth: 17,
    icon: 'camera',
    color: '#14B8A6'
  },
  {
    category: 'technology',
    count: 118,
    growth: 32,
    icon: 'cpu',
    color: '#F97316'
  },
  {
    category: 'skills',
    count: 156,
    growth: 45,
    icon: 'lightbulb',
    color: '#10B981'
  },
  {
    category: 'books',
    count: 124,
    growth: 23,
    icon: 'book-open',
    color: '#6366F1'
  },
  {
    category: 'gifts',
    count: 98,
    growth: 21,
    icon: 'gift',
    color: '#F59E0B'
  }
];

// Top Trending Items
export const trendingItems: TrendItem[] = [
  {
    id: '1',
    title: 'Oversized Vintage Denim',
    description: 'Oversized vintage denim jackets and jeans are making a strong comeback with sustainable fashion enthusiasts.',
    category: 'fashion',
    growth: 128.5,
    mentions: 27832,
    sentiment: 0.78,
    platforms: [
      { platform: 'instagram', mentions: 12453, engagement: 542000, growth: 156 },
      { platform: 'tiktok', mentions: 9872, engagement: 1240000, growth: 209 },
      { platform: 'pinterest', mentions: 5507, engagement: 187000, growth: 82 }
    ],
    timeframe: '7d',
    startDate: '2023-10-15',
    tags: ['#vintagedenim', '#oversizedjacket', '#sustainablefashion'],
    imageUrl: 'https://images.unsplash.com/photo-1608228088998-57828365d486?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '2',
    title: 'Portable Projectors',
    description: 'Mini portable projectors are trending for home entertainment and outdoor movie nights.',
    category: 'gadgets',
    growth: 145.3,
    mentions: 18932,
    sentiment: 0.85,
    platforms: [
      { platform: 'reddit', mentions: 7842, engagement: 231000, growth: 134 },
      { platform: 'twitter', mentions: 6543, engagement: 178000, growth: 167 },
      { platform: 'tiktok', mentions: 4547, engagement: 890000, growth: 189 }
    ],
    timeframe: '7d',
    startDate: '2023-10-13',
    tags: ['#portableprojector', '#hometheatre', '#movienight'],
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '3',
    title: 'Cottagecore Aesthetics',
    description: 'Rural-inspired home decoration with floral patterns, vintage furniture and handcrafted items.',
    category: 'decoration',
    growth: 87.2,
    mentions: 15720,
    sentiment: 0.92,
    platforms: [
      { platform: 'pinterest', mentions: 8721, engagement: 320000, growth: 112 },
      { platform: 'instagram', mentions: 5432, engagement: 187000, growth: 76 },
      { platform: 'tiktok', mentions: 1567, engagement: 450000, growth: 94 }
    ],
    timeframe: '7d',
    startDate: '2023-10-17',
    tags: ['#cottagecore', '#ruralchic', '#vintagehome'],
    imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '4',
    title: 'Film Photography Renaissance',
    description: 'Analog film photography is seeing a major revival among both professionals and hobbyists.',
    category: 'photography',
    growth: 102.8,
    mentions: 21450,
    sentiment: 0.81,
    platforms: [
      { platform: 'instagram', mentions: 10234, engagement: 478000, growth: 124 },
      { platform: 'reddit', mentions: 6721, engagement: 198000, growth: 87 },
      { platform: 'tiktok', mentions: 4495, engagement: 880000, growth: 142 }
    ],
    timeframe: '7d',
    startDate: '2023-10-12',
    tags: ['#35mm', '#filmphotography', '#analogphotography'],
    imageUrl: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '5',
    title: 'Chunky Loafers',
    description: 'Chunky platform loafers are becoming a staple in fall fashion collections.',
    category: 'fashion',
    growth: 95.3,
    mentions: 16540,
    sentiment: 0.79,
    platforms: [
      { platform: 'tiktok', mentions: 8732, engagement: 920000, growth: 142 },
      { platform: 'instagram', mentions: 5932, engagement: 214000, growth: 87 },
      { platform: 'pinterest', mentions: 1876, engagement: 67000, growth: 54 }
    ],
    timeframe: '7d',
    startDate: '2023-10-14',
    tags: ['#chunkyloafers', '#fallshoes', '#fashiontrend'],
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '6',
    title: 'Smart Home Gardening',
    description: 'Smart indoor gardening systems with automated watering and lighting are gaining popularity.',
    category: 'gadgets',
    growth: 78.6,
    mentions: 12870,
    sentiment: 0.88,
    platforms: [
      { platform: 'reddit', mentions: 5432, engagement: 167000, growth: 89 },
      { platform: 'twitter', mentions: 4321, engagement: 98000, growth: 65 },
      { platform: 'instagram', mentions: 3117, engagement: 124000, growth: 102 }
    ],
    timeframe: '7d',
    startDate: '2023-10-16',
    tags: ['#smarthome', '#indoorgardening', '#techlover'],
    imageUrl: 'https://images.unsplash.com/photo-1617778368431-f97343a411ac?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '7',
    title: 'AI Code Assistants',
    description: 'AI-powered tools that help developers write, debug and optimize code are becoming essential for modern development.',
    category: 'technology',
    techSubcategory: 'ai_tools',
    growth: 167.8,
    mentions: 28750,
    sentiment: 0.91,
    platforms: [
      { platform: 'twitter', mentions: 12540, engagement: 452000, growth: 178 },
      { platform: 'reddit', mentions: 9870, engagement: 324000, growth: 159 },
      { platform: 'instagram', mentions: 6340, engagement: 198000, growth: 132 }
    ],
    timeframe: '7d',
    startDate: '2023-10-10',
    tags: ['#AIcoding', '#devtools', '#productivity'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '8',
    title: 'Cloud Note-Taking Apps',
    description: 'Cross-platform note-taking applications with AI integration and collaborative features are seeing rapid adoption.',
    category: 'technology',
    techSubcategory: 'productivity',
    growth: 132.4,
    mentions: 18650,
    sentiment: 0.87,
    platforms: [
      { platform: 'twitter', mentions: 8720, engagement: 276000, growth: 145 },
      { platform: 'reddit', mentions: 6540, engagement: 198000, growth: 121 },
      { platform: 'tiktok', mentions: 3390, engagement: 567000, growth: 167 }
    ],
    timeframe: '7d',
    startDate: '2023-10-12',
    tags: ['#productivity', '#notetaking', '#digitaltools'],
    imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '9',
    title: 'Health Monitoring Wearables',
    description: 'Advanced health tracking devices that monitor sleep patterns, stress levels and vital signs are trending among health-conscious users.',
    category: 'technology',
    techSubcategory: 'daily_life',
    growth: 121.7,
    mentions: 15980,
    sentiment: 0.84,
    platforms: [
      { platform: 'instagram', mentions: 7890, engagement: 312000, growth: 134 },
      { platform: 'twitter', mentions: 5430, engagement: 167000, growth: 112 },
      { platform: 'tiktok', mentions: 2660, engagement: 489000, growth: 156 }
    ],
    timeframe: '7d',
    startDate: '2023-10-14',
    tags: ['#healthtech', '#wellness', '#wearables'],
    imageUrl: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '10',
    title: 'Python AI/ML',
    description: 'Python continues to dominate as the primary language for artificial intelligence and machine learning development.',
    category: 'skills',
    growth: 145.8,
    mentions: 32450,
    sentiment: 0.94,
    platforms: [
      { platform: 'twitter', mentions: 14320, engagement: 562000, growth: 172 },
      { platform: 'reddit', mentions: 10780, engagement: 398000, growth: 145 },
      { platform: 'linkedin', mentions: 7350, engagement: 276000, growth: 138 }
    ],
    timeframe: '7d',
    startDate: '2023-10-08',
    tags: ['#pythonprogramming', '#machinelearning', '#artificialintelligence'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '11',
    title: 'DevOps Expertise',
    description: 'DevOps skills are in high demand as companies focus on streamlining deployment pipelines and automating infrastructure.',
    category: 'skills',
    growth: 132.7,
    mentions: 24680,
    sentiment: 0.89,
    platforms: [
      { platform: 'linkedin', mentions: 12540, engagement: 432000, growth: 156 },
      { platform: 'twitter', mentions: 8970, engagement: 287000, growth: 128 },
      { platform: 'reddit', mentions: 3170, engagement: 143000, growth: 112 }
    ],
    timeframe: '7d',
    startDate: '2023-10-09',
    tags: ['#devops', '#cicd', '#kubernetes'],
    imageUrl: 'https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '12',
    title: 'Vibe Coding',
    description: 'Vibe coding combines programming with wellness practices, focusing on creating a positive mental state while developing software.',
    category: 'skills',
    growth: 118.5,
    mentions: 19750,
    sentiment: 0.93,
    platforms: [
      { platform: 'tiktok', mentions: 9870, engagement: 875000, growth: 184 },
      { platform: 'instagram', mentions: 7540, engagement: 326000, growth: 129 },
      { platform: 'twitter', mentions: 2340, engagement: 98000, growth: 87 }
    ],
    timeframe: '7d',
    startDate: '2023-10-11',
    tags: ['#vibecoding', '#mindfulcoding', '#developerhealth'],
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '13',
    title: 'Atomic Habits',
    description: 'A comprehensive guide about building good habits and breaking bad ones, focused on small changes that lead to remarkable results.',
    category: 'books',
    growth: 154.2,
    mentions: 35870,
    sentiment: 0.95,
    platforms: [
      { platform: 'instagram', mentions: 14580, engagement: 675000, growth: 165 },
      { platform: 'twitter', mentions: 12470, engagement: 487000, growth: 142 },
      { platform: 'tiktok', mentions: 8820, engagement: 1245000, growth: 187 }
    ],
    timeframe: '7d',
    startDate: '2023-10-08',
    tags: ['#atomichabits', '#selfimprovement', '#productivitytips'],
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '14',
    title: 'The Psychology of Money',
    description: 'A collection of 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life\'s most important topics.',
    category: 'books',
    growth: 139.7,
    mentions: 28540,
    sentiment: 0.92,
    platforms: [
      { platform: 'twitter', mentions: 12450, engagement: 567000, growth: 154 },
      { platform: 'instagram', mentions: 9780, engagement: 423000, growth: 128 },
      { platform: 'reddit', mentions: 6310, engagement: 187000, growth: 119 }
    ],
    timeframe: '7d',
    startDate: '2023-10-10',
    tags: ['#moneypsychology', '#personalfinance', '#financialindependence'],
    imageUrl: 'https://images.unsplash.com/photo-1606189934846-a527add8a77b?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '15',
    title: 'The Hunger Games Prequel',
    description: 'A prequel to the Hunger Games series that explores the early days of Panem and the origins of the Games.',
    category: 'books',
    growth: 128.5,
    mentions: 24980,
    sentiment: 0.89,
    platforms: [
      { platform: 'tiktok', mentions: 10780, engagement: 1345000, growth: 176 },
      { platform: 'instagram', mentions: 8920, engagement: 456000, growth: 134 },
      { platform: 'twitter', mentions: 5280, engagement: 167000, growth: 98 }
    ],
    timeframe: '7d',
    startDate: '2023-10-12',
    tags: ['#hungergames', '#dystopian', '#booklovers'],
    imageUrl: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: '18',
    title: 'Generic AI',
    description: 'The Future of Generic AI Advancing Cybersecurity and Blockchain Security',
    category: 'books',
    growth: 145.6,
    mentions: 31240,
    sentiment: 0.93,
    platforms: [
      { platform: 'tiktok', mentions: 13450, engagement: 1567000, growth: 189 },
      { platform: 'instagram', mentions: 9870, engagement: 523000, growth: 145 },
      { platform: 'twitter', mentions: 7920, engagement: 234000, growth: 112 }
    ],
    timeframe: '7d',
    startDate: '2023-10-14',
    tags: ['#fantasy', '#dragons', '#booktok'],
    imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/book/e/o/s/the-future-of-generic-ai-advancing-cybersecurity-and-blockchain-original-imaha248xywycydg.jpeg?q=70&crop=false%202x,%20https://rukminim2.flixcart.com/image/416/416/xif0q/book/e/o/s/the-future-of-generic-ai-advancing-cybersecurity-and-blockchain-original-imaha248xywycydg.jpeg?q=70&crop=false%201x'
  },
  {
    id: '16',
    title: 'Personalized Photo Books',
    description: 'Custom photo books with AI-assisted design are becoming popular gifts for special occasions.',
    category: 'gifts',
    growth: 112.5,
    mentions: 18760,
    sentiment: 0.92,
    platforms: [
      { platform: 'instagram', mentions: 8760, engagement: 345000, growth: 132 },
      { platform: 'pinterest', mentions: 6540, engagement: 198000, growth: 98 },
      { platform: 'tiktok', mentions: 3460, engagement: 567000, growth: 156 }
    ],
    timeframe: '7d',
    startDate: '2023-10-15',
    tags: ['#personalizedgifts', '#photobooks', '#giftideas'],
    imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '17',
    title: 'Smart Home Gift Sets',
    description: 'Curated smart home device bundles are trending as housewarming and holiday gifts.',
    category: 'gifts',
    growth: 98.3,
    mentions: 15430,
    sentiment: 0.89,
    platforms: [
      { platform: 'twitter', mentions: 6540, engagement: 234000, growth: 112 },
      { platform: 'reddit', mentions: 5430, engagement: 187000, growth: 98 },
      { platform: 'instagram', mentions: 3460, engagement: 156000, growth: 87 }
    ],
    timeframe: '7d',
    startDate: '2023-10-16',
    tags: ['#smarthome', '#giftbundles', '#techgifts'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055eec2c2e7?auto=format&fit=crop&q=80&w=500'
  }
];

// Technology tools data
export const techTools: TechTool[] = [
  {
    id: "t1",
    name: "Lovable.ai",
    usage: "AI-assisted web application development",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=500",
    source: "Developer Tools Weekly",
    sourceUrl: "https://www.example.com/devweekly",
    subcategory: "ai_tools",
    likes: 584,
    tags: ["Development", "AI", "Web"]
  },
  {
    id: "t2",
    name: "ChatGPT",
    usage: "Conversational AI assistant for various tasks",
    imageUrl: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    source: "AI Insights",
    sourceUrl: "https://www.example.com/aiinsights",
    subcategory: "ai_tools",
    likes: 876,
    tags: ["AI", "Assistant", "Writing"]
  },
  {
    id: "t3",
    name: "Midjourney",
    usage: "AI image generation from text descriptions",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=500",
    source: "Creative Tech",
    sourceUrl: "https://www.example.com/creativetech",
    subcategory: "ai_tools",
    likes: 732,
    tags: ["AI", "Image", "Creative"]
  },
  {
    id: "t4",
    name: "Notion",
    usage: "All-in-one workspace for notes, tasks, and wikis",
    imageUrl: "https://images.unsplash.com/photo-1633295235920-a54b7c3a3752?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    source: "Productivity Hub",
    sourceUrl: "https://www.example.com/productivity",
    subcategory: "productivity",
    likes: 642,
    tags: ["Productivity", "Notes", "Collaboration"]
  },
  {
    id: "t5",
    name: "Todoist",
    usage: "Task management and to-do list application",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    source: "App Review Daily",
    sourceUrl: "https://www.example.com/appreview",
    subcategory: "productivity",
    likes: 531,
    tags: ["Tasks", "Organization", "Productivity"]
  },
  {
    id: "t6",
    name: "Forest",
    usage: "Focus timer that helps users stay off their phones",
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    source: "Digital Wellness",
    sourceUrl: "https://www.example.com/digitalwellness",
    subcategory: "daily_life",
    likes: 478,
    tags: ["Focus", "Mindfulness", "Productivity"]
  },
  {
    id: "t7",
    name: "MyFitnessPal",
    usage: "Nutrition tracking and fitness planning app",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    source: "Health Tech Today",
    sourceUrl: "https://www.example.com/healthtech",
    subcategory: "daily_life",
    likes: 589,
    tags: ["Health", "Fitness", "Nutrition"]
  },
  {
    id: "t8",
    name: "Pocket",
    usage: "Save articles, videos and content to view later",
    imageUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    source: "Digital Lifestyle",
    sourceUrl: "https://www.example.com/digitalliving",
    subcategory: "daily_life",
    likes: 412,
    tags: ["Reading", "Content", "Organization"]
  }
];

// Trend details (expanded data for individual trend view)
export const getTrendDetails = (id: string): TrendDetail => {
  const trendBase = trendingItems.find(trend => trend.id === id);
  if (!trendBase) {
    throw new Error(`Trend with id ${id} not found`);
  }

  // Generate mock time series data
  const generateTimeSeries = () => {
    const data = [];
    const today = new Date();
    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      
      // Create some variation in the data
      const baseValue = 1000 + Math.floor(Math.random() * 2000);
      let value = baseValue;
      
      // Add a growth trend over time
      if (i < 20) {
        value = baseValue + (20 - i) * 200 + Math.floor(Math.random() * 500);
      }
      
      data.push({
        date: dateString,
        value: value
      });
    }
    return data;
  };

  return {
    ...trendBase,
    timeSeries: {
      mentions: generateTimeSeries(),
      engagement: generateTimeSeries().map(item => ({
        ...item,
        value: item.value * 3 + Math.floor(Math.random() * 2000)
      }))
    },
    relatedTrends: [
      trendingItems.filter(t => t.id !== id && t.category === trendBase.category)[0]?.title || 'Related trend 1',
      trendingItems.filter(t => t.id !== id && t.category === trendBase.category)[1]?.title || 'Related trend 2',
      'Another related trend'
    ],
    topInfluencers: [
      {
        name: 'TrendSetter23',
        platform: 'instagram',
        followers: 1250000,
        engagement: 4.7
      },
      {
        name: 'ViralCreator',
        platform: 'tiktok',
        followers: 2100000,
        engagement: 6.8
      },
      {
        name: 'StyleGuru',
        platform: 'twitter',
        followers: 780000,
        engagement: 3.9
      }
    ]
  };
};

// Platform distribution data
export const platformDistribution = [
  { name: 'Instagram', value: 32 },
  { name: 'TikTok', value: 28 },
  { name: 'Twitter', value: 18 },
  { name: 'Pinterest', value: 14 },
  { name: 'Reddit', value: 8 }
];

// Recent trends data
export const recentTrendsData = [
  { date: '2023-10-22', trends: 127 },
  { date: '2023-10-23', trends: 142 },
  { date: '2023-10-24', trends: 157 },
  { date: '2023-10-25', trends: 189 },
  { date: '2023-10-26', trends: 201 },
  { date: '2023-10-27', trends: 221 },
  { date: '2023-10-28', trends: 247 }
];
