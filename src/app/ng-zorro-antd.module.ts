import { NgModule } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzDividerModule} from "ng-zorro-antd/divider";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
    exports: [
      NzSelectModule,
      NzModalModule,
      NzButtonModule,
      NzDatePickerModule,
      NzDescriptionsModule,
      NzUploadModule,
      NzLayoutModule,
      NzDividerModule,
      NzTableModule,
      NzFormModule,
      NzImageModule
    ]
  })
  export class NgZorroAntdModule {

  }
