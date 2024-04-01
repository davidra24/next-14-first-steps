import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact page',
	description: 'Contacto de la pagina',
	keywords: ['Contact page', 'Mi primer next']
};

export default function Contact() {
	return <span className='text-7xl'>Contact</span>;
}
