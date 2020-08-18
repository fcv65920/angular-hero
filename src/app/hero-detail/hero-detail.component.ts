import { Component, OnInit , Input} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  // ActivatedRoute 儲存著到這個 HeroDetailComponent 實例的路由資訊
  // location 是一個 Angular 的服務，用來與瀏覽器打交道
  constructor(
                private route: ActivatedRoute,
                private heroService: HeroService,
                private location: Location
  ) { }


  ngOnInit(): void {
    this.getHero();
  }

   // 從路由引數中提取 id 字串轉述字 获取路径参数
   getHero(): void{
     const id = +this.route.snapshot.paramMap.get('id');
     this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
   }

   goBack(): void {
     this.location.back();
   }


}
