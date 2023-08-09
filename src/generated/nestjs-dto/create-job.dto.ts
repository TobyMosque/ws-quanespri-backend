import { ApiExtraModels } from '@nestjs/swagger';
import { ConnectPersonDto } from './connect-person.dto';

export class CreateJobPeopleRelationInputDto {
  connect: ConnectPersonDto[];
}

@ApiExtraModels(ConnectPersonDto, CreateJobPeopleRelationInputDto)
export class CreateJobDto {
  jobId?: string;
  name: string;
  people?: CreateJobPeopleRelationInputDto;
}
