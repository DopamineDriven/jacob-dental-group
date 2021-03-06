import { Fragment } from 'react';
import Head from 'next/head';
import { Meta, Navbar } from '@components/index';

const Index = () => {
	return (
		<Fragment>
			<Meta />
			<Head>
				<title>JAMstack Store</title>
			</Head>
			<div className='flex mx-5 my-5 min-w-full w-full'>
				<Navbar className='min-w-full w-full border-b-2 -mx-5 text-white' />
			</div>
		</Fragment>
	);
};

export default Index;
