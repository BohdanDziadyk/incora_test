import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feed} from '../models/Feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private requestOptions: Object = {
      observe: "body",
      responseType: "text",
    };
  constructor(private httpClient: HttpClient) { }

  getRssGadgets360(): Observable<any>{
    return this.httpClient.get<any>("https://gadgets.ndtv.com/rss/feeds", this.requestOptions)
  }
  getRssXiaomi(): Observable<any>{
    return this.httpClient.get<any>("https://blog.mi.com/en/feed", this.requestOptions)
  }
  getRssMWW(): Observable<any>{
    return this.httpClient.get<any>("https://www.mobileworldlive.com/latest-stories/feed/", this.requestOptions)
  }
  getCustomFeeds():Observable<Feed[]>{
    return this.httpClient.get<Feed[]>('http://localhost:8000/feeds/')
  }
  createCustomFeed(data): Observable<Feed>{
    return this.httpClient.post<Feed>('http://localhost:8000/feeds/', data)
  }
  editCustomFeed(data, id): Observable<Feed>{
    return this.httpClient.patch<Feed>(`http://localhost:8000/feeds/${id}`, data)
  }
  deleteCustomFeed(id): Observable<Feed>{
    return this.httpClient.delete<Feed>(`http://localhost:8000/feeds/${id}`)
  }
  getXmlFromFeed(id): Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8000/feeds/get_feed/${id}`)
  }
}
