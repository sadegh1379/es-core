import { FC } from 'react';
import NLink from 'next/link'
import { LinkPropsTypes } from './types';

const Link: FC<LinkPropsTypes> = input => {
	const { children, href, ...props } = input;

	return (
		<NLink href={href} {...props}>{children}</NLink>
	)
};

export default Link;
