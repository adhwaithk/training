import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list:any[]=[];

  EnterSubmit(item:String,bo:any)
    {

      if(item!="")
this.list.push({name:item});
bo.value=""

}
  remove(i:number)
  {
this.list.splice(i,1);
  }
}


