import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class Article {
    constructor(public title: string, public body: string) {}
}

interface ArticleResponseJson {
  title: string;
  body: string;
}

@Component({
  selector: 'app-articles',
  template: `
    <p>
      articles works!
    </p>
    <li *ngFor="let article of articles">
      title: {{ article.title }}<br>
      body: {{ article.body }}<br>
    </li>      
  `,
  styles: []
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
 
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get<ArticleResponseJson[]>('http://localhost:3000/articles').subscribe(data => {
      this.articles = data.map(e => new Article(e.title, e.body));
    });
  }
}
