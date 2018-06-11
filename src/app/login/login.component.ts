import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  save(form) {
    if (form.valid) {
      console.log(form);
      this.auth.login(form.value)
        .subscribe((result) => {
          console.log(result);
        });
    } else {
      alert('Please enter the required fields');
    }
  }

}
