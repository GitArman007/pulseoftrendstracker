export type TrendPlatform = 'twitter' | 'instagram' | 'tiktok' | 'pinterest' | 'reddit' | 'linkedin';

export type TrendCategory = 'fashion' | 'gadgets' | 'decoration' | 'photography' | 'technology' | 'skills' | 'books' | 'gifts' | 'all';

export type TechSubcategory = 'ai_tools' | 'productivity' | 'daily_life' | 'all';

export type TrendTimeframe = '24h' | '7d' | '30d' | '90d';

export interface TrendItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  growth: number;
  mentions: number;
  sentiment?: number;
  platforms?: TrendPlatformData[];
  timeframe?: TrendTimeframe;
  startDate?: string;
  techSubcategory?: TechSubcategory;
  platform?: string;
  source?: string;
  sourceUrl?: string;
  likes?: number;
  tags?: string[];
}

export interface PurchaseLink {
  title: string;
  url: string;
  platform: string;
  price: string;
}

export interface TrendPlatformData {
  platform: TrendPlatform;
  mentions: number;
  engagement: number;
  growth: number;
}

export interface CategoryStat {
  category: TrendCategory;
  count: number;
  growth: number;
  icon: string;
  color: string;
}

export interface TimeSeriesData {
  date: string;
  value: number;
}

export interface TrendDetail extends TrendItem {
  timeSeries: {
    mentions: TimeSeriesData[];
    engagement: TimeSeriesData[];
  };
  relatedTrends: string[];
  topInfluencers: {
    name: string;
    platform: TrendPlatform;
    followers: number;
    engagement: number;
  }[];
}

export interface TechTool {
  id: string;
  name: string;
  usage: string;
  imageUrl: string;
  source: string;
  sourceUrl: string;
  subcategory: TechSubcategory;
  likes: number;
  tags: string[];
}
