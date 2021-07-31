import { People } from "@src/entities/people";

interface PeopleRepositoryProtocol {
  list(): Promise<People[]>

  create(name: string): Promise<void>
}

export { PeopleRepositoryProtocol }
