import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public showhorizontal = false;
  public showverticle = true;
  public sidebarShow: boolean = true;
  page = 1;
  pageSize =10;
  items = [];
  formData: any | FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      FirstName: ['adasdad adasd', Validators.required],
      LastName: ['adsa@gmail.com',Validators.required],
      Address: ['Choudhary Mohalla', Validators.required],
      Country: ['',Validators.required],
      emailId: ['SadiqueShafi@outlook.com', Validators.required],

      PhoneNo: ['9848022338', Validators.required],


    });
  }

  showvertile(){
    this.showverticle = true;
    this.showhorizontal= false;
    console.log('fadfdk')
  }
  showhoriZontal(){
    this.showverticle = false;
    this.showhorizontal= true;
  }
  onSubmit(){
    if(!this.formData.invalid){
      console.log(this.formData.value)
    }
  }

}
