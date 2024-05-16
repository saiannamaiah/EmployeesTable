import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMaskPipe'
})
export class EmailMaskPipe implements PipeTransform {

  transform(strEmail: string): string {

    let finalString = strEmail;
    try {
          // Split whole string in two parts
          var split = strEmail.split("@");
          // Get first character of first part
          var part1 = split[0].substring(0, 1);
          // Get last character of first part
          var part2 = split[0].substring(split[0].length - 1, split[0].length);
          var newPart1 = part1;
          // First Part + * for remaing part prior to last character+
          for (let i = 0; i < split[0].length - 2; i++) {
            newPart1 += "*";
          }
          // First Part + * for remaing part prior to last character+last character
          newPart1 += part2;

          // Get 2nd Part after @
          var part3 = split[1].substring(0, 1);
          var extension = part3;

          for (let i = 0; i < split[1].split(".")[0].length - 1; i++) {
            extension += "*";
          }

          extension += "." + split[1].split(".")[1];
          finalString = newPart1 + "@" + extension;
    } catch (e) {
      finalString = strEmail
    }
    return finalString;
  }

}
