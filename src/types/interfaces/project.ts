import { FileData } from './fileData';

interface Stats {
  count_text: string;
  url: string;
  type: string;
}

export interface Project extends FileData {
  title: string;
  link: string;
  year: string;
  made_at: string;
  summary: string;
  thumbnail: string;
  stack: string[];
  stats: Stats[];
}
