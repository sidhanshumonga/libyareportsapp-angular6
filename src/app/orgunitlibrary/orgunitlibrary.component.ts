import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { AjaxserviceService } from 'src/app/ajaxservice.service';
import { SharedService } from 'src/app/shared.service'
import * as $ from 'jquery';
import { UtilityserviceService } from 'src/app/utilityservice.service';
import * as arrays from 'src/app/CONSTANTS';

@Component({
  selector: 'app-orgunitlibrary',
  templateUrl: './orgunitlibrary.component.html',
  styleUrls: ['./orgunitlibrary.component.css'],
})


export class OrgunitlibraryComponent implements OnInit {

  ougroups =  [];
  defaultgroup = [
    { value: 'Ewarn Report', viewValue: 'Ewarn Report' },
    { value: 'PHC Report', viewValue: 'PHC Report' },
    { value: 'Hospital Report', viewValue: 'Hospital Report' },
    { value: 'Medical Center', viewValue: 'Medical Center' }
  ];
  displayedColumns = ['id', 'name'];
  ouHeaders = [];
  ougroupdropdown = [];
  //for ougroup
  selectedvalues:string;
  checkedOug:boolean;

  // row:string;
  constructor(private orgunitService: AjaxserviceService, private onclicks: ElementRef, private callingBridge: SharedService) {

  }

  ngOnInit() {
    this.setOu();
    this.setOugroup();

  }
  selectedOrgUnit: string;
  checked: string;
  previousSelection: any = { id: "unknown", classList: { value: "" }, style: { color: "black" } };
  hashmapForClasses = [];
  hashmapForOuSelect = [];
  mapClasses() {
    //for expanding tree - class mapping
    var classes = this.onclicks.nativeElement.querySelectorAll('.ouid');
    for (var j = 0; j < classes.length; j++) {
      if (this.hashmapForClasses[classes[j].attributes[2].value]) { }
      else {
        classes[j].addEventListener('click', this.setChildOu.bind(this));
        this.hashmapForClasses[classes[j].attributes[2].value] = true;
      }
    }
    //for selected ou id
    var classesou = this.onclicks.nativeElement.querySelectorAll('.ouselect');
    for (var j = 0; j < classesou.length; j++) {
      if (this.hashmapForOuSelect[classesou[j].attributes[1].value]) { }
      else {
        classesou[j].addEventListener('click', this.ouselect.bind(this));
        this.hashmapForOuSelect[classesou[j].attributes[1].value] = true;
      }
    }

  };

  ouselect(element) {
    var rowid = element.currentTarget.parentElement;
    //code to change color of selected ou
    element.currentTarget.classList.add("mainfont");
    element.currentTarget.classList.add("bold");
    this.selectedOrgUnit = rowid.attributes[0].value.substring(0, 11);

    //calling function to check ou level and validating further filter for datasets
    this.checkOulevel(this.selectedOrgUnit);

    let utility = new UtilityserviceService();
    //setting ou name in header
    this.orgunitService.getOuName(this.selectedOrgUnit)
      .subscribe(response => {
        var name = response.displayName;
        utility.setHeaders("ou", name);
      });
    //function to send selectedOrgunit to generate function
    if(this.checkedOug)this.callingBridge.callMethodToSendOrgUnit(this.selectedOrgUnit + "&selectedOnly=false&dimension=fKvKRriTaSv:"+this.selectedvalues);
    else this.callingBridge.callMethodToSendOrgUnit(this.selectedOrgUnit + "&selectedOnly=false");
    //code to change color back to normal on unselect
    if (this.previousSelection.id != element.currentTarget.id) {
      this.previousSelection.classList.value = this.previousSelection.classList.value.split(" ")[0]; 
    }
    this.previousSelection = element.currentTarget;
  }

  setOu() {
    this.orgunitService.getUserOu()
      .subscribe(response => {
        for (let i = 0; i < response.organisationUnits.length; i++) {
          let child = false;
          if (response.organisationUnits[i].children.length != 0) { child = true; }
          let name = response.organisationUnits[i].name;
          let id = response.organisationUnits[i].id;
          this.ouHeaders.push({ "name": name, "id": id, "child": child });
        }
      });
    setTimeout(() => {
      this.printTable(this.ouHeaders);
    }, 1000);
  }

  setChildOu(row) {
    if (row.currentTarget.parentElement.rowIndex == 0) this.padding = 5;
    var ou = row.currentTarget.attributes[2].value;
    var child = row.currentTarget.attributes[3].value;
    this.checked = row.currentTarget.attributes[4].value;
    var rowElement = row.currentTarget;
    var numOfRowToDelete = 0;
    var newou = [];
    this.orgunitService.getChildOu(ou)
      .subscribe(response => {
        if (this.checked == "true") { numOfRowToDelete = response.children.length; }
        else {
          var parent = response.id;
          for (let j = 0; j < response.ancestors.length; j++) {
            parent = parent + " " + response.ancestors[j].id;
          }

          for (let i = 0; i < response.children.length; i++) {
            let child = false;
            if (response.children[i].children.length != 0) { child = true; }
            let name = response.children[i].name;
            let id = response.children[i].id;
            newou.push({ "name": name, "id": id, "child": child, "parent": parent });
          }
        }
      });
    setTimeout(() => {
      if (this.checked == "true") {
        this.deleteRows(rowElement);
        rowElement.attributes[4].value = false;
        this.padding -= 5;
        rowElement.innerHTML = "<i class='fa fa-plus-square-o' aria-hidden='true'></i>";
      }
      else {
        newou.sort(function (a, b) {
          var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
          if (nameA > nameB) //sort string ascending
            return -1
          if (nameA < nameB)
            return 1
          return 0 //default return value (no sorting)
        })
        this.padding += 5;
        this.printOuChild(newou, rowElement);
        rowElement.attributes[4].value = true;
        rowElement.innerHTML = "<i class='fa fa-minus-square-o' aria-hidden='true'></i>";
      }
    }, 1000);
  }


  printTable(head) {
    for (let i = 0; i < head.length; i++) {
      if (head[i].child) var row = '<tr id="' + head[i].id + i + '"><td style="cursor:pointer !important;" class="ouid  mainfont" value="' + head[i].id + '" child="true" clicked="false"><i class="fa fa-plus-square-o" aria-hidden="true"></i></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
      else var row = '<tr id="' + head[i].id + i + '"><td style="cursor:pointer !important;" class="ouid" value="' + head[i].id + '" child="false" clicked="false"></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
      $('#outable > tbody').append(row);
      this.hashmapForClasses[head[i].id] = false;
      this.hashmapForOuSelect[head[i].id] = false;
    }
    this.mapClasses();
  }

  padding: any = 0;
  printOuChild(head, rowElement) {
    for (let i = 0; i < head.length; i++) {
      if (head[i].child) var row = '<tr id="' + head[i].id + i + '"  class="' + head[i].parent + '"><td style="cursor:pointer !important;padding-left:' + this.padding + 'px" class="ouid mainfont" value="' + head[i].id + '" child="true" clicked="false"><i class="fa fa-plus-square-o" aria-hidden="true"></i></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;padding-left:' + this.padding + 'px" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
      else var row = '<tr id="' + head[i].id + i + '" class="' + head[i].parent + '"><td style="cursor:pointer !important;padding-left:' + this.padding + 'px" class="ouid" value="' + head[i].id + '" child="false" clicked="false"></td><td class="ouselect" value="' + head[i].id + '" style="cursor:pointer !important;padding-left:' + this.padding + 'px" id="' + head[i].id + '">' + head[i].name + '</td></tr>';
      var index = rowElement.parentElement.rowIndex;
      $('#outable > tbody > tr').eq(index).after(row);
      this.hashmapForClasses[head[i].id] = false;
      this.hashmapForOuSelect[head[i].id] = false;
    }
    this.mapClasses();
  }

  deleteRows(row) {
    var classname = row.parentElement.children[1].id;
    var allrows = document.getElementsByClassName(classname);
    for (var t = allrows.length - 1; t >= 0; t--) {
      allrows[t].remove();
    }
    // $("#outable tr:gt(" + rowIndex + "):lt(" + (num) + ")").remove();
  }

  checkOulevel(orgunit) {
    this.orgunitService.getOuLevel(orgunit)
    .subscribe(response => {
      if(response.level == "1" || response.level == "2"){
        this.callingBridge.callMethodToSendOu(this.defaultgroup);
      }
      else{
        this.callOuGroups(orgunit);
      }
    });
  }

  callOuGroups(orgunit){
    this.orgunitService.getOuGroups(orgunit)
    .subscribe(res => {
      this.ougroups = [];
      this.ougroups.push({ value: 'Ewarn Report', viewValue: 'Ewarn Report' });
      for(var i=0;i<res.organisationUnitGroups.length;i++){
        if(res.organisationUnitGroups[i].id in arrays.OU_GROUPS_NAME){
          var values = arrays.OU_GROUPS_NAME[res.organisationUnitGroups[i].id];
          this.ougroups.push({ value: values, viewValue: values });
        }
      }
     this.callingBridge.callMethodToSendOu(this.ougroups);
    });
  }

 setOugroup(){
  this.orgunitService.getOuGroupsDropdown()
  .subscribe(res => {
    for(let p=0;p<res.organisationUnitGroups.length;p++){
      var obj = {'name':res.organisationUnitGroups[p].displayName, 'id':res.organisationUnitGroups[p].id};
      this.ougroupdropdown.push(obj);
    }
  });
 }

sendou(){
  //function to send selectedOrgunit to generate function
  if(!this.checkedOug)this.callingBridge.callMethodToSendOrgUnit(this.selectedOrgUnit + "&selectedOnly=false&dimension=fKvKRriTaSv:"+this.selectedvalues);
  else this.callingBridge.callMethodToSendOrgUnit(this.selectedOrgUnit + "&selectedOnly=false");
}



}