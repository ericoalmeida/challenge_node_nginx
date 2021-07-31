import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('People')
class People {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  public readonly name!: string;

  constructor(){}
}

export { People }
