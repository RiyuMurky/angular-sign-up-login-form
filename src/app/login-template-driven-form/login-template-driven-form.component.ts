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
    console.log(this);
  }

  @ViewChild('tabGroup') public tabGroup:ElementRef;
  private tabEvent;

  public switchTab(event:Event):boolean{
    console.log(event);
    event.target;

    console.log(this.tabGroup);

    return false;
  }

  public constructor() { }

  ngOnInit() {
    this.tabEvent = Observable.fromEvent(this.tabGroup.nativeElement, 'click');

    this.tabEvent.subscribe((event:Event) => {
       console.log(event.target);
       console.log("tabEvent");
    });
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
