import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'BMW MTB 19 Full Suspension',
    'Merc Carbon Fiber Race',
    'RR Time Trial Blade',
  ];
  bikeForm: FormGroup;
  validMessage = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if (this.bikeForm.valid) {
      this.validMessage = 'Your bike registration has been submitted. Thank you!';
      this.bikeService.registerBike(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }

}
