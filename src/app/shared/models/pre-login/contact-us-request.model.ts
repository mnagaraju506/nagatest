import { Roles } from '../../enums/roles.enum';

export class ContactUsRequest {
  public id: string;
  public fromEmail: string;
  public firstname: string;
  public lastname: string;
  public forRole: Roles;
  public phone: string;
}
