import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage/storage.service";
import {FormBuilder} from "@angular/forms";

export interface Service {
  id: number;
  name: string;
  time: number;
}

export interface ServiceInfo {
  serviceId: number,
  cost: number;
}

export interface Master {
  id: number;
  fullName: string;
  services: ServiceInfo[],
}

export interface Schedule {
  serviceId: number;
  masterId: number;
  userId: number;
  date: Date;
}

export interface RecordForm {
  masterId: number;
  serviceId: number;
  date?: Date;
}

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
})
export class RecordFormComponent implements OnInit {
  constructor(
    private readonly storageService: StorageService,
    private fb: FormBuilder
  ) {}

  saveButtonDisable = true;

  calcCost = () => {
    const { serviceId, masterId } = this.recordForm.value!;
    const master = this.storageService.findMasterById(masterId!);
    console.log(masterId);


    const serviceInfo = master.services.find((s) => s.serviceId === serviceId);

    this.saveButtonDisable = false;

    console.log(this.recordForm);

    return serviceInfo ? serviceInfo.cost : 0;
  }

  saveRecord = () => {
    const schedules = this.storageService.schedules();
    const {date, masterId, serviceId} = this.recordForm.value!;

    schedules.push({
      serviceId: serviceId!,
      masterId: masterId!,
      userId: this.storageService.getCurrentUser().id,
      date: date!,
    });

    this.storageService.setItem('schedules', schedules);
  }

  now = () => new Date();

  services = () => this.storageService.services();

  masters = () => this.storageService.masters();

  recordForm = this.fb.group({
    date: null,
    masterId: 1,
    serviceId: 1,
  })

  async ngOnInit(): Promise<void> {

  }
}
