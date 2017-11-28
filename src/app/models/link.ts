import { User, UserAPImodel } from './user';

export interface LinkAPImodel {
  longUrl: string;
  shortUrl: string;
  owner: UserAPImodel;
  id: number;
  dateCreated: string;
}

export class Link {

  constructor (
    public longUrl: string,
    public shortUrl: string,
    public owner: User,
    public id: number,
    public dateCreated: string) {
  }

  static fromAPItype (r: LinkAPImodel) {
    return new Link(
      r.longUrl,
      r.shortUrl,
      User.fromAPItype(r.owner),
      r.id,
      r.dateCreated,
    );
  }

  toAPItype (): LinkAPImodel {
    return {
      longUrl: this.longUrl,
      shortUrl: this.shortUrl,
      owner: this.owner.toAPItype(),
      id: this.id,
      dateCreated: this.dateCreated,
    };
  }

}
