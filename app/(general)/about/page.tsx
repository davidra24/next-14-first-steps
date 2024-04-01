import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About page',
	description: 'Acerca de la pagina',
	keywords: ['About page', 'Mi primer next']
};

export default function About() {
	return <span className='text-7xl'>About</span>;
}
