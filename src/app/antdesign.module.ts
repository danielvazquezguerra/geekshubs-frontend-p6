import { NgModule } from '@angular/core';


//#region ngZorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
//#endregion

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
