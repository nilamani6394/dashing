import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profileeditor',
  templateUrl: './profileeditor.component.html',
  styleUrls: ['./profileeditor.component.css']
})
export class ProfileeditorComponent implements OnInit {
 /* profileForm= new FormGroup({
    FirstName: new FormControl(''),
    LastName:new FormControl(''),
    address:new FormGroup({
     street:new FormControl(''),
     city : new FormControl(''),
     state : new FormControl(''),
     country : new FormControl('')
    })
  });*/

  constructor(private fb : FormBuilder) { }
  profileForm = this.fb.group({
    firstName : ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;

  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
