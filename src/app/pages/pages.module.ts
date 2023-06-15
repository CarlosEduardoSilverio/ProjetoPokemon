import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Gen1Component } from './gen1/gen1.component';
import { Gen2Component } from './gen2/gen2.component';
import { Gen3Component } from './gen3/gen3.component';
import { Gen4Component } from './gen4/gen4.component';
import { Gen5Component } from './gen5/gen5.component';
import { Gen6Component } from './gen6/gen6.component';
import { Gen7Component } from './gen7/gen7.component';
import { Gen8Component } from './gen8/gen8.component';
import { Gen9Component } from './gen9/gen9.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
        Gen1Component,
        Gen2Component,
        Gen3Component,
        Gen4Component,
        Gen5Component,
        Gen6Component,
        Gen7Component,
        Gen8Component,
        Gen9Component
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule,
        MatDialogModule,        
    ],
    providers: [
        {
        provide: MatDialogRef,
       useValue: {MAT_DIALOG_DATA}
    },

    ]
})
export class PagesModule { }