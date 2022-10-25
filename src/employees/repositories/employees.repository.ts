import { Injectable } from '@nestjs/common';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeesRepository {
  getEmployees(): Employee[] {
    return [
      {
        id: 0,
        firstName: 'Jorge',
        lastName: 'Terreu',
        birthDate: new Date('1998-04-28'),
      },
      {
        id: 1,
        firstName: 'María',
        lastName: 'Martínez',
        birthDate: new Date('1998-10-23'),
      },
      {
        id: 2,
        firstName: 'Ioana',
        lastName: 'Neagu',
        birthDate: new Date('1998-11-15'),
      },
      {
        id: 3,
        firstName: 'Raúl',
        lastName: 'Sepúlveda',
        birthDate: new Date('2000-09-27'),
      },
      {
        id: 4,
        firstName: 'Jorge',
        lastName: 'García-Pueyo',
        birthDate: new Date('1998-12-27'),
      },
    ];
  }
}
