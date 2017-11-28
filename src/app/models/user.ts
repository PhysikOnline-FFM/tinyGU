import { Link, LinkAPImodel } from './link';

export interface UserAPImodel {
  name: string;
  links: LinkAPImodel[];
  id: number;
  dateCreated: string;
}

export class User {

  constructor (
    public name: string,
    public links: Link[],
    public id: number,
    public dateCreated: string) {
  }

  static fromAPItype (r: UserAPImodel) {
    return new User(
      r.name,
      r.links.map(oneLink => Link.fromAPItype(oneLink)),
      r.id,
      r.dateCreated
    );
  }

  toAPItype (): UserAPImodel {
    return{
      name: this.name,
      links: this.links,
      id: this.id,
      dateCreated: this.dateCreated,
    };
  }

}


