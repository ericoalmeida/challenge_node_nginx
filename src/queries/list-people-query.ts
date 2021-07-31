import { People } from "@src/entities/people";
import { PeopleRepositoryProtocol } from "@src/repositories/people-repository-protocol";

class ListPeopleQuery {
  constructor(
    private readonly repository: PeopleRepositoryProtocol
  ){}

  public async execute(): Promise<People[]>{
    return this.repository.list();
  }
}

export { ListPeopleQuery }
