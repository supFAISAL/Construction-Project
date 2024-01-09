import { DataService } from 'src/app/Services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-newPermitsModal',
  templateUrl: './newPermitsModal.component.html',
  styleUrls: ['./newPermitsModal.component.css']
})
export class NewPermitsModalComponent implements OnInit {
  @Input() orderNumber : any
  imagesData : any = []
  previewImage: string | undefined = '';
  previewVisible = false;
  newPermitsForm: FormGroup;
  selectedFile = Array<File>();
  modalVisbility = false;
  date = null
  permitsTypes =['برامج','حفريات','تركيبات']
  permitData?:any

  constructor(private fb: FormBuilder,private addPermit:DataService) { }

  ngOnInit() {
    this.newPermitsForm = this.fb.group({
      permitNumber: ['', Validators.required],
      permitType: ['', Validators.required],
      permitValidity: ['', Validators.required],
      notes: [''],
      
    })
  }
  onSubmit(form: FormGroup) {
    if (this.newPermitsForm.valid) {
      this.permitData = this.newPermitsForm.value
      this.permitData["documents"] = this.imagesData
      this.addPermit.addNewPermit(this.orderNumber,this.permitData)
      console.log('submit', this.permitData);
      this.modalVisbility = false
      this.newPermitsForm.reset()
    }else {
      Object.values(this.newPermitsForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
   
  }

  onSelectFile(fileInput: any) {
    for (let i = 0; i < fileInput.target.files.length; i++) {
      this.selectedFile.push(<File>fileInput.target.files[i]);
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

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
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
      console.log(info.fileList);
      this.imagesData.push(info.file)

    }
  }

}
