import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pricing page',
	description: 'Pagina de precios',
	keywords: ['price page', 'Mi primer next']
};

export default function Pricing() {
	return <span className='text-7xl'>Pricing</span>;
}
