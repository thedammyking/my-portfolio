import { FileData } from './fileData';

export interface Header extends FileData {
  name: string;
  role: string;
  summary: string;
}
export interface About extends FileData {
  title: string;
}
