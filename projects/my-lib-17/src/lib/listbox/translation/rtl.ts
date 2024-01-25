import { InjectionToken } from '@angular/core';

/**
 * A token that specifies the text direction of Kendo UI for Angular components.
 *
 * {% embed_file rtl/app.module.ts preview %}
 * {% embed_file rtl/app.component.ts %}
 * {% embed_file shared/main.ts hidden %}
 *
 */
export const RTL = new InjectionToken<string>("Kendo UI Right-to-Left token");

