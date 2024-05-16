import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: any, fieldType: string): any {
    if (!value) {
      return value;
    }

    switch (fieldType) {
      case 'email':
        return this.formatEmail(value);
      
      case 'phone':
        return this.maskPhoneNumber(value);
      
      case 'salary':
        return this.formatSalary(value);

      default:
        return value;
    }
  }

  private formatEmail(value: string): string {
    if (!value || typeof value !== 'string') {
      return value;
    }
    // Implement email formatting logic (e.g., mask for privacy)
    return value.replace(/^(.+)@(.+)$/, (_, username, domain) => `${username.substr(0, 3)}...@${domain}`);
  }

  private maskPhoneNumber(value: string): string {
    if (!value || typeof value !== 'string') {
      return value;
    }

    // Check if value is a 10-digit numeric string
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (numericValue.length === 10) {
      const maskedPart = 'XXX-XX-' + numericValue.substring(7); // Mask the first 5 digits
      return maskedPart;
    } else {
      // Return original value if it doesn't meet the criteria
      return value;
    }
  }

  private formatSalary(value: any): any {
    if (value == null || isNaN(value)) {
      return value;
    }
    // Implement salary formatting logic (e.g., add currency symbol)
    return '$' + value.toFixed(2);
  }
}
