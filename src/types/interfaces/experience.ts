import { FileData } from './fileData';

interface Article {
  publication: string;
  url: string;
}

export interface Experience extends FileData {
  company: string;
  url: string;
  role: string;
  title?: string;
  from: string;
  to: string;
  stack: string[];
  articles?: Article[];
}
