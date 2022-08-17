export interface DropdownData {
  id: string;
  title: string;
  active?: boolean;
  disabled?: boolean;
}

export enum Channel {
  FS_WEBSITE = 'FS_WEBSITE',
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  WECHAT = 'WECHAT',
  FLYERS = 'FLYERS',
  IN_PERSON_CAPTURE = 'IN_PERSON_CAPTURE',
  REFERRAL = 'REFERRAL',
  WALK_IN = 'WALK_IN',
}
