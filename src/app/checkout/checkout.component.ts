import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule and CommonModule
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  isLoading = false;
  isSuccess = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      payment: ['', [Validators.required]],
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onPlaceOrder() {
    if (this.checkoutForm.valid) {
      this.isLoading = true;
      this.isSuccess = false;
      this.errorMessage = '';

      const orderData = this.checkoutForm.value;

      // Replace with your backend API URL
      const apiUrl = 'https://www.thunderclient.com/products/';

      this.http.post(apiUrl, orderData).subscribe(
        (response) => {
          console.log('Order placed successfully:', response);
          this.isLoading = false;
          this.isSuccess = true;
          this.checkoutForm.reset();
        },
        (error) => {
          console.error('Error placing order:', error);
          this.isLoading = false;
          this.errorMessage = 'Failed to place order. Please try again later.';
        }
      );
    }
  }
}
