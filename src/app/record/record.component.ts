import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage/storage.service";
import {Schedule} from "../record-form/record-form.component";
import {addMinutes} from "../util/add-min";

export interface Record {
  date: Date;
  master: string;
  service: string;
  cost: number;
}

export interface User {
  id: number;
  phone: string;
  password: string;
  fullName: string;
}

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
})
export class RecordComponent {
  constructor(private readonly storageService: StorageService) { }

  records(): Record[] {
    const schedule = this.storageService.schedules();
    const currentUser = this.storageService.getCurrentUser();
    const currentUserSchedule = schedule.filter((s) => s.userId === currentUser.id);

    console.log(currentUserSchedule);

    return currentUserSchedule.map((s) => {
      const {serviceId, masterId, date} = s;
      const master = this.storageService.findMasterById(masterId);

      console.log(master);

      const cost = master.services.find(s => s.serviceId === serviceId)!.cost;

      return {
        service: this.storageService.findServiceById(serviceId).name,
        cost,
        master: master.fullName,
        date: date,
      } as Record;
    })
  }


}
