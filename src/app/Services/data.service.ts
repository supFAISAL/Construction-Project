import { Injectable } from '@angular/core';
import {WorkData} from "../Models/work-data";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  contractType: Array<{type:string, description:string}> = [
    {type: '4400014762', description: 'عقد جدة 2021'},
    {type: '4400008644', description: 'عقد جدة 2016'},
    {type: '4400002998', description: 'عقد جدة 2013'}]

  orderType: Array<{type:string, description:string}> = [
    {type: '1', description: 'توصيلة عدادات بدون حفرية'}, {type: '2', description: 'حفرية مع عداد'},
    {type: '3', description: 'حفرية'}, {type: '16', description: 'حفريات طلب حكومية'},
    {type: '17', description: 'حفرية'}, {type: '20', description: 'تخفيف أحمال ارضي جهد منخفض'},
    {type: '21', description: 'تخفيف أحمال ارضي جهد متوسط'}, {type: '22', description: 'تخفيف أحمال هوائي'},
    {type: '24', description: 'تغير محطات'}, {type: '29', description: 'مشاريع ربط محطات تحويل'},
    {type: '90', description: 'عدادات'}, {type: '91', description: 'حفرية طلبات بدون صكوك'},
    {type: '401', description: 'توصيلة عدادات بدون حفرية'}, {type: '402', description: 'حفرية مع عداد'},
    {type: '404', description: 'حفرية مع عداد ومحطات'}, {type: '410', description: 'حفرية'},
    {type: '441', description: 'تخفيف أحمال ارضي'}, {type: '442', description: 'تخفيف أحمال هوائي'},
    {type: '450', description: 'مشاريع ربط محطات تحويل'}, {type: '460', description: 'استبدال شبكات التوزيع الاحلال بدون عداد'},
    {type: '80', description: 'احلال شبكات ارضية ومحطات'}, {type: '85', description: 'احلال شبكات ارضية ومحطات'},
    {type: '408', description: 'إزالة العدادات و الشبكة'}, {type: '409', description: 'إزالة العدادات و الشبكة'},
    {type: '802', description: 'حفرية'}, {type: '804', description: 'حفرية مع عداد ومحطات'},
    {type: '810', description: 'حفرية'}, {type: '200', description: 'سلف بين الفروع'},
    {type: '503', description: 'صيانة عدادات المحروقة'}, {type: '100', description: 'سلف بين المقاولين'},
    {type: 'مشاريع 110', description: 'مشاريع 110'}, {type: 'ضغط متوسط HT', description: null!},
    {type: '220', description: '220'}, {type: '403', description: 'توصيل عداد مع كيبل هوائي'},
    {type: 'ضغط منخفض LT', description: null!}, {type: 'صيانة كبائن', description: null!},
    {type: 'طوارئ مؤقتات', description: null!}, {type: 'طوارئ محطات', description: null!},
    {type: 'طوارئ هوائي', description: null!}, {type: 'صيانة عدادت', description: null!},
    {type: '421', description: '421'}, {type: '505', description: 'فحص ميداني'},
    {type: '432', description: 'أتمتة الشبكة'}, {type: '502', description: 'صيانة العدادات'},
    {type: '461', description: 'صيانة العدادات'}, {type: '71', description: 'استبدال عداد (صيانه)'},
    {type: '28', description: 'استبدال عداد (صيانه)'}, {type: '61', description: 'صيانة الشبكة'},
    {type: '82', description: 'استبدال شبكات التوزيع'}, {type: '5-21', description: 'قراء شهر مايو 2021'},
    {type: '490', description: '490'}, {type: '4-21', description: 'قراء شهر ابريل 2021'},
    {type: '801', description: 'تمديد شبكة هوائية LV ايصال سريع'}, {type: '805', description: 'تركيب محول ش هوائية MV ايصال سريع'},
    {type: '405', description: 'توصيل عداد بمحول شبكة هوائية V'}, {type: '660', description: 'الحرم المكي والمشاعر'},
    {type: '465', description: 'استبدال شبكات التوزيع'}, {type: '6-21', description: 'قراء شهر يونيو 2021'},
    {type: 'مسح الكبائن', description: null!}, {type: '801', description: 'توصيلة عدادات بدون حفرية'},
    {type: '201-7-21', description: 'قراء شهر يوليو 2021'}, {type: '8-21', description: 'قراء شهر اغسطس'},
    {type: '9-21', description: 'قراء شهر سبتمبر 2021'},
  ]

  dummydata: WorkData[] = [
    {
      orderNumber: 123456789,
      orderType: '24 | تغير محطات',
      location: '21.33105,39.24552',
      orderDate: new Date,
      place: 'جدة',
      contractType: '4400014762',
      regDate: new Date,
      moveTo: ['تركيبات', 'برامج', 'تركيبات', 'برامج'],
      status: 'جديد',
      price: undefined!,
      extraInfo: undefined!,
      files: undefined!,
      permits:[],
      department: undefined!,
    }, 
    {
      orderNumber: 54645654,
      orderType: '402 | حفرية مع عداد',
      location: '21.33105,39.24552',
      orderDate: new Date,
      place: 'جدة',
      contractType: '4400002998',
      regDate: new Date,
      moveTo: ['تركيبات', 'برامج'],
      status: 'جديد',
      price: undefined!,
      extraInfo: undefined!,
      permits:[
        {
            permitNumber: 21785478,
            permitType: "برامج",
            permitValidity: [
                new Date("2021-12-07T11:06:50.212Z"),
                new Date("2021-12-24T11:06:50.212Z")
            ],
            notes: "يرجى مراعات المسافات بطلب من البلدية",
            documents: []
        }
    ],
      department: undefined!,
      files: undefined!
    }]

  constructor() { }

  getData() {
    return this.dummydata;
  }

  getOrderType() {
    return this.orderType;
  }
  getContractType() {
    return this.contractType;
  }

  addNewData(newData: WorkData){
    this.dummydata.push(newData);
    console.log(this.dummydata);
  }

  addNewPermit(workOrderNumber:number,permitData:any){

    this.dummydata.forEach(el=>{
      if(el.orderNumber==workOrderNumber){
        el.permits.push(permitData)
        console.log(el)
      }
    })

  }

  renewPermit(orderNumber:number,newPermit:any){
    this.dummydata.forEach(el=>{
      if(el.orderNumber===orderNumber){
        el.permits.forEach(permit=>{
          if(permit.permitNumber==newPermit.permitNumber){
            permit = newPermit
            console.log(this.dummydata)

          }
        })
      }
    })
  }

}
