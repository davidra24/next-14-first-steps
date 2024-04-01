'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

interface props {
	path: string;
	text: string;
}

export const ActiveLink = ({ path, text }: props) => {
	const pathName = usePathname();

	return (
		<Link
			className={`${style.link} ${pathName === path && style['active-link']}`}
			href={path}>
			{text}
		</Link>
	);
};
