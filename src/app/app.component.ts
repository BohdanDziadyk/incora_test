import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import {Feed, NewsFeed, NewsRss} from './models/Feed';
import {FeedService} from './services/feed.service';
import {error} from '@angular/compiler/src/util';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = 'incora_test'
  RssData: NewsRss;
  FeedData: NewsFeed;
  feeds: Feed[]
  constructor(private feedService: FeedService) {}
  getRssFeedDataGadgets360() {
    this.feedService.getRssGadgets360().subscribe(value => {
        let parseString = xml2js.parseString;
      parseString(value, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
  getDataFromFeed(id){
    this.RssData = null;
    this.FeedData = null;
    this.feedService.getXmlFromFeed(id).subscribe(value => {
        let parseString = xml2js.parseString;
        console.log(parseString);
        parseString(value, (err, result: NewsRss) => {
          if (result.rss){
            this.RssData = result;
          }
          else {
            parseString(value, (err, result: NewsFeed) =>{
              this.FeedData = result;
            })
          }
        });
      });
  }
  ngOnInit(): void {
    this.getRssFeedDataGadgets360()
    this.feedService.getCustomFeeds().subscribe(value => this.feeds = value)
  }
}
