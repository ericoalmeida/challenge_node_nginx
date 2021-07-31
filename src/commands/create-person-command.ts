import faker from 'faker';

import { PeopleRepositoryProtocol } from "@src/repositories/people-repository-protocol";

class CreatePersonCommand{
  constructor(
    private readonly repository: PeopleRepositoryProtocol
  ){}

  public async execute(): Promise<void>{
    const name = faker.name.firstName();

    await this.repository.create(name);
  }
}

export { CreatePersonCommand }
