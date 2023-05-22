import { messageType } from "./enums";

export interface IIdentification {
  idInstance: string;
  apiTokenInstance: string;
}

export interface ISettings {
  name: string;
  value: string;
}

export interface IContact {
  name?: string;
  tel: string;
}

export interface IUploadData {
  chatId: string;
  message: string;
}

export interface IContactChat {
  name?: string;
  tel: string;
  messages: IMessagesData[];
}

export interface IMessagesData {
  id: string;
  type: messageType;
  message: string;
}
