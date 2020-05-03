import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
    imports: [
        NzButtonModule,
        NzSelectModule,
        NzFormModule

    ],
    exports: [
     NzButtonModule,
     NzSelectModule,
     NzFormModule
    ]
})

export class AntDesignModule {}
