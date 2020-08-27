import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private uri : string = 'http://api.openweathermap.org/data/2.5/forecast';
  private appid : string = 'e4cdac38bd3592d547523d45c59f744d';
  private id : number = 524901;

  public weatherData : any;  
  public message : string;

  constructor(
    private http : HttpClient
  ) {

      //set params
      console.log('Initializing weather');
      let httpParams = new HttpParams()
        .set('id', this.id.toString().trim())
        .set('appid', this.appid.trim())
        .set('units', 'imperial'); 

      const options = {
        params: httpParams
      }

      //http request
      this.http.get(this.uri, options).subscribe(
        data => {
          console.log(data);
          this.setWeatherData(data);
        },
        error => {
          this.message = 'An error occurred. Please try again.';
          console.log(error);
        }
      );
      
   }

  ngOnInit(): void {
  }

  setWeatherData(data){
    this.weatherData = data;
  }

}
