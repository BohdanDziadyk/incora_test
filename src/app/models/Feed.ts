export interface Feed{
  id: number;
  title: string;
  url: string;
}
export interface NewsRss {
  rss: RssObject;
}

export interface RssObject {
  $: any;
  channel: Array<RssChannel>;
}

export interface RssChannel {
  "atom:link": Array<string>;
  description: Array<string>;
  image: Array<RssImage>;
  item: Array<RssItem>;
  language: Array<string>;
  lastBuildDate: Date;
  link: Array<string>;
  title: Array<string>;
}

export interface RssImage {
  link: Array<string>;
  title: Array<string>;
  url: Array<string>;
}

export interface RssItem {
  category: Array<string>;
  description: Array<string>;
  guid: any;
  link: Array<string>;
  pubDate: Date;
  title: Array<string>;
}
export interface NewsFeed {
  feed?: RssObject;
}

export interface RssObject {
  $: any;
  category: Array<object>;
  entry: Array<NewItem>;
  id: Array<string>;
  link: Array<object>;
  title: Array<string>;
  updated: Date;
}

export interface NewItem {
  author: Array<object>;
  category: Array<object>;
  content: Array<object>;
  id: Array<string>;
  link: Array<NewLink>;
  mediathumbnail: Array<object>;
  title: Array<string>;
  updated: Array<string>;
}

export interface NewLink {
  $: object;
}
