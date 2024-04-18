import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { Resource } from '@/types/enums';

const contentDirectory = join(process.cwd(), 'content');

export const getFileNames = (resource: Resource) => {
  const resourcePath = join(contentDirectory, resource);
  return fs.readdirSync(resourcePath);
};

export const getDataByFileName = <T = unknown>(fileName: string, resource: Resource) => {
  let fullFileName = fileName;
  if (!fileName.endsWith('.md')) fullFileName = `${fileName}.md`;
  const fullFilePath = join(contentDirectory, resource, fullFileName);
  const fileContents = fs.readFileSync(fullFilePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: fullFileName.replace(/\.md$/, ''), content } as T;
};
