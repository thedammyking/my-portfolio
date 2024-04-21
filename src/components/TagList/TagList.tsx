import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import { uniqueId } from 'lodash';
import Tag from '../Tag';

interface TagListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags, className }) => {
  return (
    <ul className={cx('flex flex-wrap list-none gap-2', className)}>
      {tags.map(tag => (
        <li key={uniqueId('tag')}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
