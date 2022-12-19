import {Injectable, Optional, SkipSelf} from "@angular/core";
import {Master, Schedule, Service} from "../record-form/record-form.component";
import {User} from "../record/record.component";
import {LoginForm} from "../login/login.component";
import {addMinutes} from "../util/add-min";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class StorageService {
  // /**
  //  * Storage
  //  */
  private readonly storage: Storage = window.localStorage;


  // get length(): number {
  //   return this.storage.length;
  // }
  //
  // clear(): void {
  //   this.storage.clear();
  // }

  getItem<T>(key: string): T {
    const data = this.storage[key];

    return JSON.parse(data!);
  }


  setItem<T>(key: string, value: T): void {
    this.storage[key] = JSON.stringify(value);
  }

  services = () => this.getItem<Service[]>('services');

  masters = () => this.getItem<Master[]>('masters');

  schedules = () => this.getItem<Schedule[]>('schedules');

  users = () => this.getItem<User[]>('users');

  getCurrentUser = () => this.getItem<User>('currentUser');

  setCurrentUser = (user: User) => this.setItem<User>('currentUser', user);

  addUser = (user: User) => {
    const users = this.users()!;

    users.push(user);
  }

  findServiceById(id: number): Service {
    return this.services().find(s => s.id === id)!;
  }

  findMasterById(id: number): Master {
    return this.masters().find(s => s.id === id)!;
  }

  loginUser(input: LoginForm) {
    const {password, phone} = input;

    const users = this.users();
    const user = users.find((u) => u.phone === phone && u.password === password)!;

    this.setCurrentUser(user);
  }

  constructor() {
    console.log('service create');

    this.setItem<Schedule[]>('schedules', [{
      serviceId: 1,
      masterId: 1,
      userId: 1,
      date: addMinutes(new Date(), 40),
    }]);

    this.setItem<Master[]>('masters',
      [
        {
          id: 1,
          fullName: 'Егор Савковский',
          services: [
            {
              serviceId: 1,
              cost: 1500,
            }
          ]
        },
        {
          id: 2,
          fullName: 'Стас Угольников',
          services: [
            {
              serviceId: 1,
              cost: 2000,
            }
          ]
        },
        {
          id: 3,
          fullName: 'Алексей Москвинов',
          services: [
            {
              serviceId: 1,
              cost: 2500,
            }
          ]
        },
        {
          id: 4,
          fullName: 'Илья Шевчук',
          services: [
            {
              serviceId: 2,
              cost: 1000,
            }
          ]
        }
      ]
    );

    this.setItem<Service[]>('services',
      [
        {
          name: 'Барберская стрижка',
          id: 1,
          time: 40,
        },
        {
          name: 'Стрижка машинкой 2-3 насадками',
          id: 2,
          time: 30,
        },
        {
          name: 'Стрижка машинкой 1 насадкой',
          id: 3,
          time: 20,
        },
        {
          name: 'Бритье головы (шейвером)',
          id: 4,
          time: 30
        },
        {
          name: 'Оформление бороды',
          id: 5,
          time: 20,
        },
        {
          name: 'Камуфляж седины',
          id: 6,
          time: 35,
        },
      ]
    );

    this.setItem('users', [{
      id: 1,
      fullName: 'Ойбек Мулимов',
      password: '123qwes1',
      phone: '79185338901'
    }]);
  }


  async fetchMasters(): Promise<Master[]> {

  }
}
