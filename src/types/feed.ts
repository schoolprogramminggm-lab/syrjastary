export type FeedItemType = 'event' | 'job' | 'grant' | 'program';

export interface FeedItemMeta {
  label: string;
  /** Выделенная метаданная (например, «+50 баллов») — зелёная и жирная. */
  highlight?: boolean;
}

export interface FeedItem {
  id: string;
  type: FeedItemType;
  title: string;
  meta: FeedItemMeta[];
}
