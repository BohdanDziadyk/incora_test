import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FeedService} from '../services/feed.service';
import {Feed} from '../models/Feed';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  createForm: FormGroup
  title: FormControl = new FormControl('',  [Validators.required])
  url: FormControl = new FormControl('', [Validators.required])
  editForm: FormGroup
  editTitle: FormControl = new FormControl('')
  editUrl: FormControl = new FormControl('')
  showEditFormFlag: boolean;
  editID: number;
  feeds: Feed[]
  constructor(private feedService: FeedService, private router:Router) {
    this.createForm = new FormGroup({
      title: this.title,
      url: this.url
    })
    this.editForm = new FormGroup({
      editTitle: this.editTitle,
      editUrl: this.editUrl
    })
  }
  createCustomFeed(createForm){
    this.feedService.createCustomFeed(createForm.getRawValue()).subscribe(value => {
      this.ngOnInit()
      createForm.reset()
      console.log(value)
    })
  }
  editCustomFeed(editForm){
    const formData = new FormData()
    editForm.controls.editTitle.value?formData.set('title', editForm.controls.editTitle.value):null
    editForm.controls.editUrl.value?formData.set('url', editForm.controls.editUrl.value):null
    this.feedService.editCustomFeed(formData, this.editID).subscribe(value => {
      this.ngOnInit()
      editForm.reset()
      console.log(value);
    })
  }
  deleteCustomFeed(id){
    this.feedService.deleteCustomFeed(id).subscribe(value => {
      console.log(value);
      this.ngOnInit()
    })
  }
  showEditForm(id){
    this.editID = id
    this.showEditFormFlag = !this.showEditFormFlag
  }
  getEditFormFlag(){
    return this.showEditFormFlag;
  }
  ngOnInit(): void {
    this.showEditFormFlag = false
    this.feedService.getCustomFeeds().subscribe(value => this.feeds = value)
  }

  logOut() {
    localStorage.removeItem('authorized')
    this.router.navigate([''])
  }
}
