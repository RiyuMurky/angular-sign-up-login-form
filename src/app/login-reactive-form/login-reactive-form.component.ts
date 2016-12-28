import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public signupForm:FormGroup;
  public loginForm:FormGroup;

  @ViewChild('tabGroup') public tabGroup:ElementRef;
  private tabObservable:Observable<Event>;

  public submitForm({ value, valid }: { value: CustomDataForm, valid: boolean }):void{
      console.log(value, valid);
  }

  readonly state:StateTabs = {
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
  // constructor(private _formBuilder: FormBuilder) {}
  constructor() {
    this.currentTabState = this.state.signup;
  }

  ngOnInit() {

    this.tabObservable = Observable.fromEvent<Event>(this.tabGroup.nativeElement, 'click');
    this.tabObservable.subscribe((event:Event) => {
      event.preventDefault();
      this.setCurrentState((event.target as HTMLAnchorElement).hash);
    });

    this.signupForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.compose([Validators.minLength(10), Validators.maxLength(20)])]),
    });

    this.signupForm.controls["firstname"].valueChanges.subscribe((value:string) => {
      console.log(value);
    });

  }

}
