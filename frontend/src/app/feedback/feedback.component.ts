import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  feedbackList: any = [];
  index = ''


  ngOnInit(): void {
    let data = localStorage.getItem('feedbackList');
    this.feedbackList = JSON.parse(data || '');
    console.log('loginList', this.feedbackList);
  }


  constructor(private formbuilder: FormBuilder) {
    this.feedbackForm = this.formbuilder.group({
      Name: [''],
      Email: [''],
      PhoneNumber: [''],
      Message: ['']
    })

  }


  clear() {
    this.feedbackForm.reset();
  }


  submit() {
    this.feedbackList.push(this.feedbackForm.value);
    console.log(this.feedbackList.value);
    this.clear();
    localStorage.setItem('feedbackList', JSON.stringify(this.feedbackList));
  }


  edit(i: any) {
    this.feedbackForm.patchValue({
      Name: this.feedbackList[i].Name,
      Email: this.feedbackList[i].Email,
      PhoneNumber: this.feedbackList[i].PhoneNumber,
      Message: this.feedbackList[i].Message
    })

    this.index = i;

  }


  update() {
    this.feedbackList[this.index].Name = this.feedbackForm.value.Name,
      this.feedbackList[this.index].Email = this.feedbackForm.value.Email,
      this.feedbackList[this.index].PhoneNumber = this.feedbackForm.value.PhoneNumber,
      this.feedbackList[this.index].Message = this.feedbackForm.value.Message

    this.clear()
  }


  delete(i: any) {
    this.feedbackList.splice(i, 1);
  }

}
