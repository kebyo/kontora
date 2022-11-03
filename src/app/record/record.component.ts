import { Component, OnInit } from '@angular/core';

export interface Record {
  date: Date;
  master: string;
  service: string;
  cost: number;
}

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  records: Record[] = [
    {
      date: new Date(),
      master: 'Ойбек Муслимов',
      service: 'Стрижка',
      cost: 2000,
    },
    {
      date: new Date(),
      master: 'Стас Угольников',
      service: 'Стрижка',
      cost: 2000,
    },
    {
      date: new Date(),
      master: 'Алексей Москвинов',
      service: 'Стрижка',
      cost: 2000,
    },
    {
      date: new Date(),
      master: 'Илья Шевчук',
      service: 'Стрижка',
      cost: 2000,
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
