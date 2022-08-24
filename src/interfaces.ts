export interface DropdownData {
  id: string;
  title: string;
  active?: boolean;
  disabled?: boolean;
}

export enum Channel {
  IN_PERSON_CAPTURE = 'IN_PERSON_CAPTURE',
  REFERRAL = 'REFERRAL',
  WECHAT = 'WECHAT',
  FLYERS = 'FLYERS',
  FS_WEBSITE = 'FS_WEBSITE',
  WALK_IN = 'WALK_IN',
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
}
