import { ApiExtraModels } from '@nestjs/swagger';
import { ConnectJobDto } from './connect-job.dto';
import { ConnectCompanyDto } from './connect-company.dto';

export class UpdatePersonJobRelationInputDto {
  connect: ConnectJobDto;
}
export class UpdatePersonCompanyRelationInputDto {
  connect: ConnectCompanyDto;
}

@ApiExtraModels(
  ConnectJobDto,
  UpdatePersonJobRelationInputDto,
  ConnectCompanyDto,
  UpdatePersonCompanyRelationInputDto,
)
export class UpdatePersonDto {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  job?: UpdatePersonJobRelationInputDto;
  company?: UpdatePersonCompanyRelationInputDto;
}
