import { ContactDetails } from './contact.model';
import { Address } from './address.model';
import { VendorDetail } from './vendor-details.model';
import { Mlm } from './mlm.model';
import { SellerDetails } from './seller-details.model';

export class UserDetails {
  public customInfo?: string;
  public id: string;
  public docType: string;
  public partitionKey: string;
  public displayName: string;
  public firstName: string;
  public lastName: string;
  public roles: string[];
  public profilePicUrl: string;
  public contact: ContactDetails;
  public termsSignedDate: string;
  public address: Address;
  public locale: string;
  public agentDetail: string;
  public vendorDetail: VendorDetail;
  public mLM: Mlm;
  public sellerDetails: SellerDetails;
  public refereeId: string;
  public registrationType: string;
  public profession: string;
  public isLoginActive: boolean;
  public userType: string;
  public _etag: string;
  public dateJoined: string;
  public rating: number;
}
