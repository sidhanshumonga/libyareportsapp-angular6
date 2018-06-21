import { Component, OnInit, ElementRef,HostBinding,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { OverlayContainer} from '@angular/cdk/overlay';
import * as $ from 'jquery';
import * as values from "src/app/CONSTANTS";

@Component({
  selector: 'app-component',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
 constructor(private onclicks: ElementRef,public overlayContainer: OverlayContainer,@Inject(DOCUMENT) private document: any){

 }
 
 @HostBinding('class') componentCssClass;

 ngAfterViewInit(){
  var classes = this.onclicks.nativeElement.querySelector('#sidebarCollapse');
  classes.addEventListener('click', this.hideme.bind(this));

  $(document).click(function(){
    $('#changecolor').addClass('toggleTheme');
  });

  $('.sp').click(function(e){
    e.stopPropagation();
  });
 }
hideme(){
  // open sidebar
  $('#sidebar').addClass('active');
  // fade in the overlay
  $('.overlay').fadeIn();
}

  ngOnInit() {
    setTimeout(() => {
      $("#loader").fadeOut(500);
      $("#mainPage").fadeIn(1200);
      $("#sub-header").fadeIn(100);
    }, 5000);
  }

  toggle(){
   $('#changecolor').removeClass('toggleTheme');
  }

  updateTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  goToHome(){
    let base = values.BASE_URL;
    let dashboard = values.DHIS_DASHBOARD;
    this.document.location.assign(base+dashboard);    
  }

}

