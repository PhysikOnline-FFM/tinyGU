import { Pipe, PipeTransform } from '@angular/core';
import {TranslationService} from "./translation.service";

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslationService) {}

  transform(value: any, args?: any): any {
    if (!value) return;
    return this.translationService.translate(value);
  }

}
