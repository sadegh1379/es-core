import { PackageConfig } from 'core';
import { forwardRef } from 'react';
const { LANGUAGE } = PackageConfig;

interface LinkPropType {
	href?: string;
	to?: string;
	children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkPropType>((props, ref) => {
	const { href, children, to, ...linkProps } = props;

	const hrefPath = href && href.startsWith('/') ? `${window.location.origin}/${LANGUAGE}${href}` : href;
	const toPath = to && to.startsWith('/') ? `${window.location.origin}/${LANGUAGE}${to}` : to;

	return <p>{children}</p>;
});

export default Link;
