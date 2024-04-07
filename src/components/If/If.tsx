import React from 'react';

interface IfProps {
	condition: boolean;
}

const If: React.FC<React.PropsWithChildren<IfProps>> = ({
	children,
	condition,
}) => {
	return condition ? children : null;
};

export default If;
