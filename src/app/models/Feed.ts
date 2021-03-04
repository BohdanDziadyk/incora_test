export interface Feed{
  id: number;
  title: string;
  url: string;
}
export interface NewsRss {
  rss: IRssObject;
}

export interface IRssObject {
  $: any;
  channel: Array<IRssChannel>;
}

export interface IRssChannel {
  "atom:link": Array<string>;
  description: Array<string>;
  image: Array<IRssImage>;
  item: Array<IRssItem>;
  language: Array<string>;
  lastBuildDate: Date;
  link: Array<string>;
  title: Array<string>;
}

export interface IRssImage {
  link: Array<string>;
  title: Array<string>;
  url: Array<string>;
}

export interface IRssItem {
  category: Array<string>;
  description: Array<string>;
  guid: any;
  link: Array<string>;
  pubDate: Date;
  title: Array<string>;
}
export interface NewsFeed {
  feed?: IRssObject;
}

export interface IRssObject {
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
