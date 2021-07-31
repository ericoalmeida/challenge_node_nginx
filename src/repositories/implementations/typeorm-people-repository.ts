import { getRepository, Repository } from "typeorm";

import { People } from "@src/entities/people";
import { PeopleRepositoryProtocol } from "@src/repositories/people-repository-protocol";

class TypeORMPeopleRepository implements PeopleRepositoryProtocol{
  private readonly repository: Repository<People>;

  constructor(){
    this.repository = getRepository(People);
  }

  async list(): Promise<People[]> {
    return this.repository.find();
  }

  async create(name: string): Promise<void> {
    const people = this.repository.create({ name });

    await this.repository.save(people)
  }
}

export { TypeORMPeopleRepository }
