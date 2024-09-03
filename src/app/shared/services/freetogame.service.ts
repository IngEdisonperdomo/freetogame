import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { FreetogameI } from '@shared/interfaces/freetogame';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreetogameService {
  private baseUrl =
    'https://cors-anywhere.herokuapp.com/' + environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  getGames(): Observable<any> {
    return this.httpClient.get<FreetogameI>(`${this.baseUrl}/games`);
  }

  getGamesByCategory(category: string): Observable<any> {
    return this.httpClient.get<FreetogameI>(
      `${this.baseUrl}/games?category=${category}`
    );
  }

  getGamesByPlatform(platform: string): Observable<any> {
    return this.httpClient.get<FreetogameI>(
      `${this.baseUrl}/games?platform=${platform}`
    );
  }
}
