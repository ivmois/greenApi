import axios, { AxiosResponse } from 'axios';
import { IIdentification, ISettings, IUploadData } from '../types/types';

export const getSettings = async ({ idInstance, apiTokenInstance }: IIdentification) => {
  const request = axios(`https://api.green-api.com/waInstance${idInstance}/GetSettings/${apiTokenInstance}`);
  const data = await request;
  return data;
};

export const postSettings = ({ idInstance, apiTokenInstance }: IIdentification, { name, value }: ISettings) => {
  return new Promise<AxiosResponse>(async (resolve, reject) => {
    try {
      const response = axios.post(
        `https://api.green-api.com/waInstance${idInstance}/SetSettings/${apiTokenInstance}`,
        { [name]: value },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};

export const postMessage = ({ idInstance, apiTokenInstance }: IIdentification, messageData: IUploadData) => {
  const uploadData = JSON.stringify(messageData);
  return new Promise<AxiosResponse>(async (resolve, reject) => {
    try {
      const response = axios.post(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, uploadData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
};

export const getMessage = async ({ idInstance, apiTokenInstance }: IIdentification) => {
  const request = axios(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`);
  const data = await request;
  return data;
};

export const deleteMessage = async ({ idInstance, apiTokenInstance }: IIdentification, receiptId: string) => {
  const request = axios.delete(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`);
  const data = await request;
  return data;
};
