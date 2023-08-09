import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.prisma.company.create({
      data: createCompanyDto,
    });
  }

  findAll(): Promise<Company[]> {
    return this.prisma.company.findMany();
  }

  findOne(id: string): Promise<Company> {
    return this.prisma.company.findFirst({
      where: { companyId: id },
    });
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    return this.prisma.company.update({
      where: { companyId: id },
      data: updateCompanyDto,
    });
  }

  remove(id: string): Promise<Company> {
    return this.prisma.company.delete({
      where: { companyId: id },
    });
  }
}
