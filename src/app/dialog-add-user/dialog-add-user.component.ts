import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})

export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date | undefined;

  constructor(private firestore: Firestore) {
    this.firestore = firestore;
  }
  saveUser() {
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
    }

    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, this.user.toJSON())
      .then((result: any) => {
        console.log('Added user to Firestore', result);
      })
      .catch((error) => {
        console.error('Error adding user to Firestore', error);
      });
  }
}
