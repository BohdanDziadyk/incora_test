import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import {Feed, NewsRss} from './models/Feed';
import {FeedService} from './services/feed.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = 'incora_test'
  RssData: NewsRss;
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
    this.feedService.getXmlFromFeed(id).subscribe(value => {
        let parseString = xml2js.parseString;
        console.log(parseString);
        parseString(value, (err, result: NewsRss) => {
          this.RssData = result;
          console.log(this.RssData);
        });
      });
  }
  ngOnInit(): void {
    this.getRssFeedDataGadgets360()
    this.feedService.getCustomFeeds().subscribe(value => this.feeds = value)
  }
}
