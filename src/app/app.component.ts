import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'unsubscribe-demo';
  data: any;
  dataSubscription: Subscription;
 
  constructor(private dataService: DataService){}
   
  ngOnInit(): void {
    this.dataSubscription = this.dataService.getData().subscribe(
      (values) => {
        this.data = values;
        console.log("Received values : ", this.data);
      },
      (error) => {
        console.log("Error received : ", error);
      },
      () => {
        console.log("Operation complete")
      }

    );
  }

  ngOnDestroy(): void {
    if(this.dataSubscription){
      this.dataSubscription.unsubscribe();
    }    
  }
}
