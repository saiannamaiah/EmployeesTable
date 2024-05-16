import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberMaskPipe'
})
export class NumberMaskPipe implements PipeTransform {
  transform(inputNumber: any, visibleDigits: number): string {
    // Convert inputNumber to string if it's a number
    const phoneNumber = typeof inputNumber === 'number' ? inputNumber.toString() : inputNumber;

    // Check if phoneNumber is a valid string and visibleDigits is a valid number
    if (typeof phoneNumber !== 'string' || isNaN(visibleDigits) || visibleDigits <= 0) {
      return phoneNumber; // Return phoneNumber as is if invalid parameters or type
    }

    // Check if phoneNumber length is suitable for masking
    if (phoneNumber.length <= visibleDigits * 2) {
      return phoneNumber; // Return phoneNumber as is if it doesn't meet masking criteria
    }

    try {
      // Calculate the number of visible digits from the start and end
      const firstVisibleNumbers = phoneNumber.slice(0, visibleDigits);
      const lastVisibleNumbers = phoneNumber.slice(-visibleDigits);

      // Mask the middle digits with '*'
      const maskedMiddle = phoneNumber.slice(visibleDigits, -visibleDigits).replace(/\d/g, '*');

      // Construct the final masked phone number
      const finalString = firstVisibleNumbers + maskedMiddle + lastVisibleNumbers;

      return finalString;
    } catch (error) {
      console.error('Error in NumberMaskPipe:', error);
      return phoneNumber; // Return phoneNumber as is in case of any error during masking
    }
  }
}
