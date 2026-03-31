import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  quotes = [
    'Patience is a key element of success.',
    'If you think your teacher is tough, wait till you get a boss.',
    'Life is not fair — get used to it!',
    "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    "Be nice to nerds. Chances are you'll end up working for one.",
  ];
  links = [
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Bill_Gates' },
    { label: 'Gates Foundation', url: 'https://www.gatesfoundation.org/' },
    { label: 'Gates Notes', url: 'https://www.gatesnotes.com/' },
    { label: 'Twitter / X', url: 'https://twitter.com/billgates' },
  ];
}
