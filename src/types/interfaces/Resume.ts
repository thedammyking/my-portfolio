import { FileData } from './fileData';

export interface Stack extends FileData {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export interface Skills extends FileData {
  expertise: string[];
  softSkills: string[];
}

export interface Summary extends FileData {
  title: string;
}
