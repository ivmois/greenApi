import { ISettings } from "../../../../../../types/types";

export const requiredSetting: { [n: string]: string } = {
  incomingWebhook: 'Получать уведомления о входящих сообщениях и файлах',
  markIncomingMessagesReaded: 'Отмечать входящие сообщения прочитанными',
  markIncomingMessagesReadedOnReply: 'Отмечать входящие сообщения прочитанными при отправке',
  outgoingMessageWebhook: 'Получать уведомления о сообщениях, отправленных с телефона',
  outgoingWebhook: 'Получать уведомления о статусах отправленных сообщений',
  stateWebhook: 'Получать уведомления об изменении состояния авторизации аккаунта',
};

export const getSettingList = (currentObj: { [n: string]: any }, newObj: { [n: string]: string }): ISettings[] => {
  const array: ISettings[] = [];

  for (let key in currentObj) {
    if (newObj.hasOwnProperty(key)) array.push({ name: key, value: currentObj[key] });
  }

  return array;
};
