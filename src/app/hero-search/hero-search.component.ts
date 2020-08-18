import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;

//Subject 既是可觀察物件的資料來源，本身也是 Observable。 你可以像訂閱任何 Observable 一樣訂閱 Subject。
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService){}

  //查詢 查找每个段落的term 元素
  //呼叫它的 next(value) 方法往 Observable 中推送一些值，就像 search() 方法中一樣。
  search(term: string): void {
    this.searchTerms.next(term)
  }

  // 用以縮減對 searchHeroes() 的呼叫次數 觀察物件（每次都是 Hero[] ）。
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //每次點等待300毫秒 你實際發起請求的間隔永遠不會小於 300ms。
      debounceTime(300),
      //distinctUntilChanged() 會確保只在過濾條件變化時才傳送請求。
      distinctUntilChanged(),
      //條件更改到新的 switchMap在每次發出時，會取消前一個內部 observable (你所提供函數的結果) 的訂閱，然後訂閱一個新的 observable
      //它會取消並丟棄以前的搜尋可觀察物件，只保留最近的。
      switchMap((term: string) =>
      this.heroService.searchHeroes(term)),
    );
  }
}
