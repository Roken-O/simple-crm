import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, FormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
user: User = new User;
birthDate!: Date;

saveUser(){
this.user.birthDate = this.birthDate.getTime();
  console.log(this.user);
}

}
