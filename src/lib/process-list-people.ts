import { People } from "@src/entities/people";

class ProcessListPeople {
  public async execute(list: People[]): Promise<string>{
    let HtmlInString = '<h1>Full Cycle Rocks!</h1></br>';

    HtmlInString = HtmlInString.concat('<ul>');

   list.forEach(people => {
    HtmlInString =  HtmlInString.concat(`<li>${people.id} - ${people.name}</li>`);
   });

   HtmlInString = HtmlInString.concat('</ul>');

   return HtmlInString
  }
}

export { ProcessListPeople }
