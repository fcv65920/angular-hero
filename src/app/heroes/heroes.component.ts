import { MessagesService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// import { HEROES } from '../mock-heroes';
// 轉而匯入 HeroService

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // selectedHero: Hero;

  // 轉而匯入 HeroService
  // heroes = HEROES;

  heroes: Hero[];

  constructor(private heroService: HeroService
            , private messageService: MessagesService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // 點選單一英雄 賦值給元件的 selectedHero
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selecte hero id=${hero.id}`);
  // }

  // HeroService.getHeroes 方法之前返回一個 Hero[]， 現在它返回的是 Observable<Hero[]>。 用參數heroes 接訂閱結果 初始
  // getHeroes():void{
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
