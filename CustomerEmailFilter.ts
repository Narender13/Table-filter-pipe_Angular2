import { Injectable, Pipe, PipeTransform } from '@angular/core';
//import {Customer} from '../services/Customer';

@Pipe({
    name: 'customerEmailFilter'
})
@Injectable()
export class CustomerEmailFilter implements PipeTransform {

    transform(games: any[], email: any): any {
        if (email) {
            return games.filter(res => (res.game.toLowerCase()).indexOf(email.toLowerCase()) !== -1);
        } else {
            return games;
        }
    }
};

