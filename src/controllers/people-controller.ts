import { Request, Response } from "express";

import { CreatePersonCommand } from "@src/commands/create-person-command";
import { ListPeopleQuery } from "@src/queries/list-people-query";
import { TypeORMPeopleRepository } from "@src/repositories/implementations/typeorm-people-repository";
import { ProcessListPeople } from "@src/lib/process-list-people";

class PeopleController {
  public async handle(request: Request, response: Response): Promise<Response>{
    const peopleRepository = new TypeORMPeopleRepository()
    const createPersonCommand = new CreatePersonCommand(peopleRepository);
    const listPeopleQuery = new ListPeopleQuery(peopleRepository);
    const processListPeople = new ProcessListPeople()

    await createPersonCommand.execute();

    const peoples = await listPeopleQuery.execute();

    const html = await processListPeople.execute(peoples);

    return response.send(html);
  }
}

export { PeopleController }
