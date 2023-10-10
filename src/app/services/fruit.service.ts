import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class FruitService {
	private baseURL: string = '';
  private fruitURL: string = 'fruits'

	constructor(private http: HttpClient) {
		this.baseURL = environment.onePieceApi + this.fruitURL;
	}

	getFruit(id: number): Observable<any> {
		return this.http.get(this.baseURL + '/' + id);
	}

	getFruits(): Observable<any> {
		//  + '/search/type/Paramecia'
		return this.http.get<any>(this.baseURL);
	}

	getImageFruit(filename: string): Observable<any> {
		return this.http.get(this.baseURL + '/picture/' + filename);
	}

}
