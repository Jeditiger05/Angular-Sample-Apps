import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }
  title = 'google-places-app';

  logEvent(event: any){
    console.log(event);
    
  }

  getPlaceAutocomplete(): void {
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('address') as HTMLInputElement,
      {
        componentRestrictions: { country: 'AUS' },
        types: ['address']  // 'establishment' / 'address' / 'geocode'
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      var element = document.getElementById('address') as HTMLInputElement;
      if(place){
        element = place as HTMLInputElement;
        console.log(element);
        
      }

    });
  }
}