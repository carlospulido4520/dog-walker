import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Dogwalker } from 'src/app/shared/interfaces/dogwalker.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() dogWalker: Dogwalker;
  public showNoUser: boolean;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.showNoUser = user ? false : true;
  }
}
