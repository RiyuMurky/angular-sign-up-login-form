import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent implements OnInit {
  @ViewChild('tabGroup') public tabGroup:ElementRef;
  private tabObservable:Observable<Event>;

  public submitForm(formData:any):void{
    console.log(formData);
  }

  readonly state:{readonly login:string, readonly signup:string} = {
    login:"#login",
    signup:"#signup"
  };

  public currentTabState:string;

  private setCurrentState(hash:string):void{
    for(let e in this.state){
      if(this.state[e] === hash){
        this.currentTabState = hash;
        break;
      }
    }
  }

  constructor() {
    this.currentTabState = this.state.signup;
  }

  ngOnInit() {
    this.tabObservable = Observable.fromEvent<Event>(this.tabGroup.nativeElement, 'click');
    this.tabObservable.subscribe((event:Event) => {
      event.preventDefault();
      this.setCurrentState((event.target as HTMLAnchorElement).hash);
    });
  }

}
