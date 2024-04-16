'use client';

import React from 'react';
import cx from 'classnames';
import { uniqueId } from 'lodash';

import ProjectRow from './ProjectRow';

import styles from './ProjectArchive.module.scss';

const ProjectArchiveDeskTop = () => {
  return (
    <table className={cx('hidden lg:table w-full', styles.ProjectArchive_table)}>
      <thead>
        <tr>
          <th className='project-table-heading'>Year</th>
          <th className='project-table-heading'>Project</th>
          <th className='project-table-heading'>Made at</th>
          <th className='project-table-heading'>Stack</th>
          <th className='project-table-heading'>Link</th>
        </tr>
      </thead>
      <tbody>
        {Array(7)
          .fill(1)
          .map(() => (
            <ProjectRow key={uniqueId('project-row')} />
          ))}
      </tbody>
    </table>
  );
};

export default ProjectArchiveDeskTop;
