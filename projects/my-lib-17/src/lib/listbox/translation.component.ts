/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Component

} from '@angular/core';
import { allTools } from './constants';
import { L10N_PREFIX, TestTranslationService } from './translation/translation.service';
import { CommonModule } from '@angular/common';

let idx: number = 0;

/**
 * Represents the [Kendo UI ListBox component for Angular]({% slug overview_listbox %}).
 */
@Component({
    selector: 'kendo-translation-test',
    providers: [
        TestTranslationService,
        {
            provide: L10N_PREFIX,
            useValue: 'kendo.test'
        },
    ],
    template: `
        <ng-container kendoTestTranslatedMessages
            i18n-moveUp="kendo.test.moveUp|The title of the Move Up button"
            moveUp="Move Up"

            i18n-moveDown="kendo.test.moveDown|The title of the Move Down button"
            moveDown="Move Down"

            i18n-transferTo="kendo.test.transferTo|The title of the Transfer To button"
            transferTo="Transfer To"

            i18n-transferAllTo="kendo.test.transferAllTo|The title of the Transfer All To button"
            transferAllTo="Transfer All To"

            i18n-transferFrom="kendo.test.transferFrom|The title of the Transfer From button"
            transferFrom="Transfer From"

            i18n-transferAllFrom="kendo.test.transferAllFrom|The title of the Transfer All From button"
            transferAllFrom="Transfer All From"

            i18n-remove="kendo.test.remove|The title of the Remove button"
            remove="Remove"
            >
        </ng-container>
        
        <div *ngFor="let tool of selectedTools;">
            {{messageFor(tool.name)}}
        </div>
        
        

    `,
})
export class TestTranslationComponent {


    /**
     * @hidden
     */
    public messageFor(key: string): string {
        return this.localization.get(key);
    }

    /**
     * @hidden
     */
    public selectedTools: any[] = allTools;

    
    constructor(
        private localization: TestTranslationService
    ) {

       
    }



}
