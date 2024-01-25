import { Directive, forwardRef } from '@angular/core';
import { TranslationMessages } from './messages';
import { TestTranslationService } from './translation.service';

/**
 * @hidden
 */
@Directive({
  providers: [
      {
          provide: TranslationMessages,
          useExisting: forwardRef(() => TestTranslationMessagesDirective)
      }
  ],
  selector: '[kendoTestTranslatedMessages]'
})
export class TestTranslationMessagesDirective extends TranslationMessages {
    constructor(protected override service: TestTranslationService) {
        super();
    }
}
