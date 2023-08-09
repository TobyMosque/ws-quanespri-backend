import { ApiExtraModels } from '@nestjs/swagger';
import { ConnectJobDto } from './connect-job.dto';
import { ConnectCompanyDto } from './connect-company.dto';

export class CreatePersonJobRelationInputDto {
  connect: ConnectJobDto;
}
export class CreatePersonCompanyRelationInputDto {
  connect: ConnectCompanyDto;
}

@ApiExtraModels(
  ConnectJobDto,
  CreatePersonJobRelationInputDto,
  ConnectCompanyDto,
  CreatePersonCompanyRelationInputDto,
)
export class CreatePersonDto {
  personId?: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  job: CreatePersonJobRelationInputDto;
  company: CreatePersonCompanyRelationInputDto;
}
