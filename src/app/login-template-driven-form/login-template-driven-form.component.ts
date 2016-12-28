import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-login-template-driven-form',
  templateUrl: './login-template-driven-form.component.html',
  styleUrls: ['./login-template-driven-form.component.css']
})
export class LoginTemplateDrivenFormComponent implements OnInit {

  public submitForm(formData:any):void{
    console.log(formData);
  }

  readonly state:{readonly login:string, readonly signup:string} = {
    login:"#login",
    signup:"#signup"
  };

  public currentTabState:string;

  public switchTab(event:Event):void{
    event.preventDefault();
    let hash:string = (event.target as HTMLAnchorElement).hash;
    for(let e in this.state){
      if(this.state[e] === hash){
        this.currentTabState = hash;
        break;
      }
    }
  }

  public constructor() {
    this.currentTabState = this.state.signup;
  }

  ngOnInit() {
    // this.tabEvent = Observable.fromEvent(this.tabGroup.nativeElement, 'click');
    // this.tabEvent.subscribe((event:Event) => { });
  }

}

/*
$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight');
			} else {
		    label.removeClass('highlight');
			}
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  e.preventDefault();
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  target = $(this).attr('href');
  $('.tab-content > div').not(target).hide();
  $(target).fadeIn(600);

});
*/
