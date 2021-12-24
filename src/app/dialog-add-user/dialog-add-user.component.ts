import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  /**
   * Saves users in firebase database
   * 
   *@param {string} name - test 
   * 
   */
  saveUser(){
    if (this.birthDate){
      this.user.birthDate = this.birthDate.getTime();
    } else {
      this.user.birthDate = 0;
    }
  
    
    console.log('Current user is', this.user);
    this.loading = true;
    this.firestore
    .collection('users')
    .add(this.user.toJSon())
    .then((result: any) => {
      this.loading = false;
      console.log('Addinn user finished', result);
      this.dialogRef.close();
    });
  }



}
