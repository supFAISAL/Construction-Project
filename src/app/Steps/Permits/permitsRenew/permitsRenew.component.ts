import { DataService } from 'src/app/Services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
// For Images Upload 
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  // End
@Component({
  selector: 'app-permitsRenew',
  templateUrl: './permitsRenew.component.html',
  styleUrls: ['./permitsRenew.component.css']
})
export class PermitsRenewComponent implements OnInit {
  @Input() permitData : any
  @Input() workOrderNumber : any
  imagesData : any = []
  permitRenewForm: FormGroup;
  previewImage: string | undefined = '';
  previewVisible = false;
  newPermitData?:any
  renewPermitsForm: FormGroup;
  modalVisbility = false;
  constructor(private fb: FormBuilder,private renewPermit:DataService) { }

  ngOnInit() {
   this.permitRenewForm = this.fb.group ({
      permitNumber: [{value: '', disabled: true}, Validators.required],
      permitType: ['', Validators.required],
      permitValidity: ['', Validators.required],
      notes: ['', ],
    })
  }

  onSubmit(form: FormGroup) {
       
    if (this.permitRenewForm.valid) {
      /* we used this "this.permitRenewForm.getRawValue() " insted of "this.permitRenewForm.value" because when we disabked the permitNumber
     its deleted from the form but this function will give u the raw values basically will give us the data we want */  
      this.newPermitData = this.permitRenewForm.getRawValue()
      this.newPermitData["document"] = this.imagesData
      this.renewPermit.renewPermit(this.workOrderNumber,this.newPermitData)
      console.log('submit', this.newPermitData);
      this.modalVisbility = false
      this.permitRenewForm.reset()
    }else {
      Object.values(this.permitRenewForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    }

  showModal(): void {
    this.modalVisbility = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.modalVisbility = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.modalVisbility = false;
  }

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file);
      this.imagesData.push(info.file)
      
    }
  }

}
