import { FileData } from './fileData';

interface Article {
  publication: string;
  url: string;
}

interface Role {
  from: string;
  role: string;
  to: string;
  body: string;
}

export interface Experience extends FileData {
  articles?: Article[];
  company: string;
  employmentType: string;
  from: string;
  industry: string;
  location: string;
  to: string;
  technologies: string[];
  roles: Role[];
  url: string;
}
