import { Roles } from '../../enums/roles.enum';

export class Category {
  public categoryId: string;
  public subTitle: string;
  public description: string;
  public videoImage: string;
  public videoUrl: string;
  public roleType: Roles;
  public showSortOrder: number;
  public iconImageUrl: string;
}
