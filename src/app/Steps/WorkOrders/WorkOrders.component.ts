import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';
import {WorkData} from 'src/app/Models/work-data';
import {DataService} from "../../Services/data.service";
import {BehaviorSubject, debounceTime, map, Observable, pipe, switchMap} from "rxjs";
import {CommonService} from "../../Services/common.service";

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
  selector: 'app-WorkOrders',
  templateUrl: './WorkOrders.component.html',
  styleUrls: ['./WorkOrders.component.css']
})
export class WorkOrdersComponent implements OnInit {
  modalToggled = false;
  orderType: Array<{type:string, description:string}> = []
  contractType: Array<{type:string, description:string}> = []
  dummyData: WorkData[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  isVisible = false;
  newOrderForm: FormGroup;
  selectedRowIds: Set<number> = new Set<number>();
  selectedFile = Array<File>();
  departmentData = ['برامج', 'تركيبات','حفريات'];
  employeeData: { [place: string]: string[] } = {
    برامج: ['احمد صالح',   'اسعد عمر', 'سالم محمد'],
    تركيبات: ['ايهاب ', 'وليد', 'عبدالله'],
    حفريات: ['صالح', 'سعيد', 'خالد']
  };

  constructor(private fb: FormBuilder, private data: DataService, private commonService: CommonService) { }

  ngOnInit() {
    this.contractType = this.data.getContractType();
    this.orderType = this.data.getOrderType();
    this.dummyData = this.data.getData();
    this.newOrderForm = this.fb.group({
      orderNumber: [null, Validators.required],
      orderType: [null, Validators.required],
      location: [null, Validators.required],
      contractType: [null, Validators.required],
      department: 'برامج',
      place: ['جدة', Validators.required],
      orderDate: [null, Validators.required],
      regDate: Date,
      moveTo: new FormControl([]),
      price: null,
      extraInfo: null,
      files: new FormControl([]),
      status:null
    })
  }

  onRowClick(id: number, event: any) {
    if(!event.target.checked){
      if(this.selectedRowIds.has(id))
        this.selectedRowIds.delete(id);
    }
    else if(event.target.checked)
      this.selectedRowIds.add(id);
  }

  rowIsSelected(id: number) {
    return this.selectedRowIds.has(id);
  }

  getSelectedRows(){
    return this.dummyData.filter(x => this.selectedRowIds.has(x.orderNumber));
  }

  onSubmit(form: FormGroup) {
    const str = form.value.location;
    this.newOrderForm.value.location = str.split('lat,long:').pop().trim();
    this.newOrderForm.value.status = 'جديد';
    this.newOrderForm.value.regDate = Date.now();
    console.log(form.value);
    this.data.addNewData(form.value);
    this.newOrderForm.reset();
    this.isVisible = false;
  }

  OpenInfoModal(){
    this.commonService.MoreInfoClicked(true);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {this.isVisible = false;}
  handleCancel(): void {this.isVisible = false;}

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      this.newOrderForm.value.files.push(info.file);
    }
  }

}
