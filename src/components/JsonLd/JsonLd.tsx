import React from 'react';
import { WithContext } from 'schema-dts';

interface JsonLdProps {
  json: WithContext<any>;
}

const JsonLd: React.FC<JsonLdProps> = ({ json }) => {
  return (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
};

export default JsonLd;
