import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

// 該應用就要從遠端伺服器獲取英雄資料了，而那天生就是非同步操作
// of(HEROES) 會返回一個 Observable<Hero[]>
  // getHeroes(): Hero[]{
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

  // 反引號 ( ` ) 用於定義 JavaScript 的 範本字串字面量，以便嵌入 id。
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
