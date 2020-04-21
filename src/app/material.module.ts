import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [

        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
    ]
})

export class MaterialModule {}
