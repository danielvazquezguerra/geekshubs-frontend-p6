import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';




@NgModule({
    imports: [
        NzButtonModule,
        NzSelectModule,

    ],
    exports: [
     NzButtonModule,
     NzSelectModule,
    ]
})

export class AntDesignModule {}
