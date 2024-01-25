import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { TranslationComponentMessages } from './component-messages';

/**
 * @hidden
 */
@Directive()
export class TranslationMessages extends TranslationComponentMessages {
    /**
     * The text of the `Move Up` button title.
     */
    @Input() public set moveUp(message: string) {
        console.log('moveUp message', message)
    };

    /**
     * The text of the `Move Down` button title.
     */
    @Input() public moveDown: string;

    /**
     * The text of the `Remove` button tittle.
     */
    @Input() public remove: string;

    /**
     * The text of the `Transfer To` button title.
     */
    @Input() public transferTo: string;

    /**
     * The text of the `Transfer From` button title.
     */
    @Input() public transferFrom: string;

    /**
     * The text of the `Transfer All To` button title.
     */
    @Input() public transferAllTo: string;

    /**
     * The text of the `Transfer All From` button title.
     */
    @Input() public transferAllFrom: string;
}
