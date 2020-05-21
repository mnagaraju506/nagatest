import { prop, required, email, pattern, alpha, maxLength, minLength, mask } from '@rxweb/reactive-form-validators';
import { AppMetadata } from 'src/app/shared/constants/app-metadata.const';

export class MyProfile {
  @prop()
  public businessName: string;

  @prop()
  public billaddress: string;

  @prop()
  @alpha()
  @required()
  public firstName: string;

  @prop()
  @alpha()
  @required()
  public lastName: string;

  @email({ message: AppMetadata.invalidEmail })
  @required()
  public email: string;

  @required()
  @mask({ mask: '(999)-999 9999' })
  public phone: string;

  @prop()
  public apt: string;

  @required()
  @pattern({ expression: { zipCode: /^\d{5}(?:[-\s]\d{4})?$/ } })
  public zipCode: string;

  @required()
  public city: string;

  @required()
  public state: string;
}
