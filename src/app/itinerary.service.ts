import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Itinerary } from './itinerary';
import { ITINERARY } from './itineraries';


@Injectable({
  providedIn: 'root'
})
export class ItineraryService  {
  restItems: any;
//  restItemsUrl = 'https://qabook.hollandamerica.com/api/cruiseSearch/v1/api/search/itineraries?country=US&limit=10&skip=0';
  restItemsUrl = './itineraryData.ts';

   constructor(private http: HttpClient) { }

   getItinerary(): Observable<Itinerary[]> {
    return of(ITINERARY);
    //return this.http.get(this.restItemsUrl);
  }

  getMockData(){
    return of (ITINERARY);
  }
}


