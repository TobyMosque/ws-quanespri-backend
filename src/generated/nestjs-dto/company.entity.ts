import { Person } from './person.entity';

export class Company {
  companyId: string;
  name: string;
  people?: Person[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  revision: string;
}
