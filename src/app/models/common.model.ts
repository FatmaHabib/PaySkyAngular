export interface HeaderOptions {
  name: string;
  value: string;
}

export enum ErrorResultEnum {
  Created = "Created",
  Edited = "Edited",
  AlreadyExist = "AlreadyExist",
  Deleted = "Deleted",
  IsRelated = "IsRelated",
  NotExist = "NotExist",
  Error = "Error",
}

export enum StyleTypeEnum {
  Success = "success",
  Warning = "warning",
  Danger = "error",
  Info = "info",
  Primary = "primary",
}