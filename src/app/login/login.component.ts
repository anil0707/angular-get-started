import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginDetails: Object = {
		username: '',
		password: ''
	}

	//userDetails: Object;

	login() {
		this.loginService.login(this.loginDetails)
			.subscribe(data => {console.log(data)})
	};
	

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
