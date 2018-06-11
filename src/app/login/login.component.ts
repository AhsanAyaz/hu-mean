import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(form) {
    if (form.valid) {
      console.log(form);
      this.auth.login(form.value)
        .subscribe((result) => {
          this.router.navigate(['/']);
          console.log(result);
        }, (err) => {
          alert('something went wrong' + JSON.stringify(err));
        });
    } else {
      alert('Please enter the required fields');
    }
  }

}
