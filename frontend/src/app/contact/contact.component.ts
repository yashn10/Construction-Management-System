import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TemplateRef } from '@angular/core';
import { json } from 'express';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactList: any = [];
  contactForm: FormGroup;
  index = '';

  
  ngOnInit(): void {
    // let data = localStorage.getItem('contact');
    // this.contactList = JSON.parse(data || '');
  }

  
  clear() {
    this.contactForm.reset();
  }


  submit() {
    this.contactList.push(this.contactForm.value);
    // localStorage.setItem('contactlist', JSON.stringify(this.contactList));
    this.clear();
  }


  edit(i:any) {
    this.contactForm.patchValue({
      Name: this.contactList[i].Name,
      Email: this.contactList[i].Email,
      Message: this.contactList[i].Message
    })

    this.index = i;

  }


  update() {
    this.contactList[this.index].Name = this.contactForm.value.Name,
    this.contactList[this.index].Email = this.contactForm.value.Email,
    this.contactList[this.index].Message = this.contactForm.value.Message

    this.clear();

  }


  delete(i:any) {
    this.contactList.splice(i, 1);
  }


  constructor(private formbuilder: FormBuilder) {
    this.contactForm = this.formbuilder.group(
      {
        Name: [''],
        Email: [''],
        Message: ['']
      }
    );
  }

}
