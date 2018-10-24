import { Component, OnInit, Input } from '@angular/core';
import { Itinerary } from '../itinerary';
import { ItineraryService } from '../itinerary.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private itineraryService: ItineraryService, private http: HttpClient) { }
  
  itineraries;

  ngOnInit() {
    this.getItinerary();
    console.log(this.itineraries);
  }

  getItinerary(): void {
    this.itineraryService.getItinerary()
        .subscribe(data => this.itineraries = data);
  }
}
