import { ApiExtraModels } from '@nestjs/swagger';
import { ConnectPersonDto } from './connect-person.dto';

export class UpdateJobPeopleRelationInputDto {
  connect: ConnectPersonDto[];
}

@ApiExtraModels(ConnectPersonDto, UpdateJobPeopleRelationInputDto)
export class UpdateJobDto {
  name?: string;
  people?: UpdateJobPeopleRelationInputDto;
}
