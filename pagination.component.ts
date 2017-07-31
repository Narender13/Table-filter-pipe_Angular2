import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerEmailFilter} from './CustomerEmailFilter';


@Component({
    selector: 'pagination',
    templateUrl: `./pagination.html`,
    
})
export class PaginationComponent {
    public games: [{game: string,  platform: string, release: string}];
    public searchString: string;
    //public title: any = true;
    //authenticated:any;
    constructor(private route: Router) {
    // this.authenticated =  localStorage.getItem('authenticated');
    //if(!this.authenticated) {
    //  this.route.navigate(['/']);
    //  }

        this.games = [{
            game: "Neeru",
            platform: " Xbox One, PS4, PC",
            release: "August 23"
        },
        {
            game: "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release: "August 23"
        },
        {
            game: "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release: "August 23"
        },
        {
            game: "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release: "August 23"
        },
        {
            game: "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "Deus Ex: Mankind Divided",
            platform: " Xbox One, PS4, PC",
            release: "August 23"
        },
        {
            game: "Hue",
            platform: " Xbox One, PS4, Vita, PC",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        },
        {
            game: "The Huntsman: Winter's Curse",
            platform: "PS4",
            release: "August 23"
        }]
    };

}
