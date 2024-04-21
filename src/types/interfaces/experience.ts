import { FileData } from './fileData';

interface Article {
  publication: string;
  url: string;
}

export interface Experience extends FileData {
  company: string;
  url: string;
  role: string;
  location: string;
  from: string;
  to: string;
  stack: string[];
  articles?: Article[];
}
