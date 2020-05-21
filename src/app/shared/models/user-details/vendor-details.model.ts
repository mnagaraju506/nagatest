import { Address } from './address.model';
import { HoursOfOperationItem } from './hours-of-operation.model';

export class VendorDetail {
  public billingAddress: Address;
  public photoUrl: string;
  public businessName: string;
  public businessProfile: string;
  public hoursOfOperation: HoursOfOperationItem[];
  public services: string[];
  public isPaymentDone: boolean;
  public paymentDate: string;
  public sSNORTaxId: string;
  public name: string;
  public taxClassification: string;
  public taxClassificationType: string;
  public trialExpiryDate: string;
  public jobRadius: number;
}
