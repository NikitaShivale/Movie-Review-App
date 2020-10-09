import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
    private catégories = [
    '1',
    '2',
    '3',
    '4',
    '5'
    ];
    
    getCategories(){
        return this.catégories;
    }



    
}