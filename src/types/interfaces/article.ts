import { FileData } from './fileData';

export interface Article extends FileData {
  title: string;
  link: string;
  date: string;
  thumbnail: string;
  platform: string;
}
