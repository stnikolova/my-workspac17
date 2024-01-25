

/**
 * @hidden
 */
export const DEFAULT_TOOLBAR_POSITION: any = 'right';

/**
 * @hidden
 */
export const allTools: any[] = [
    {
        name: 'moveUp',
        label: 'Move Up',
        icon: 'caret-alt-up',
        svgIcon: null
    },
    {
        name: 'moveDown',
        label: 'Move Down',
        icon: 'caret-alt-down',
        svgIcon: null
    },
    {
        name: 'transferTo',
        label: 'Transfer To',
        icon: 'caret-alt-left',
        svgIcon: null
    },
    {
        name: 'transferFrom',
        label: 'Transfer From',
        icon: 'caret-alt-right',
        svgIcon: null
    },
    {
        name: 'transferAllTo',
        label: 'Transfer All To',
        icon: 'caret-double-alt-right',
        svgIcon: null
    },
    {
        name: 'transferAllFrom',
        label: 'Transfer All From',
        icon: 'caret-double-alt-left',
        svgIcon: null
    },
    {
        name: 'remove',
        label: 'Remove',
        icon: 'x',
        svgIcon: null
    }
];

/**
 * @hidden
 */
export const sizeClassMap: { [key: string]: string } = {
    small: 'sm',
    medium: 'md',
    large: 'lg'
};

/**
 * @hidden
 */
export const actionsClasses: { [key: string]: string } = {
    left: 'k-listbox-actions-left',
    right: 'k-listbox-actions-right',
    top: 'k-listbox-actions-top',
    bottom: 'k-listbox-actions-bottom'
};
