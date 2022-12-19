import {Component, OnInit} from '@angular/core';
import {Master, Schedule, Service} from "./record-form/record-form.component";
import {addMinutes} from "./util/add-min";
import {StorageService} from "./storage/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly storageService: StorageService,
  ) {}

  title = 'Цирульник';

  ngOnInit() {

  }
}
