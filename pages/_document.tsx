import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps
} from 'next/document';
import { GA_TRACKING_ID } from '@utils/gtag';
import { mediaStyles } from 'lib/window-width';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps: DocumentInitialProps = await Document.getInitialProps(
			ctx
		);
		return { ...initialProps };
	}
	render() {
		console.log(GA_TRACKING_ID);
		const EnvConditional = () => {
			return process.env.NODE_ENV === 'production' ? (
				<Head lang='en-US'>
					<meta charSet='utf-8' />
					<style type='text/css' dangerouslySetInnerHTML={{ __html: mediaStyles }} />
					<link rel='stylesheet' href='/fonts/index.css' />
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${GA_TRACKING_ID}', {
					page_path: window.location.pathname,
				});
			`
						}}
					/>
				</Head>
			) : (
				<Head lang='en-US'>
					<meta charSet='utf-8' />
					<style type='text/css' dangerouslySetInnerHTML={{ __html: mediaStyles }} />
					<link rel='stylesheet' href='/fonts/index.css' />
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
				</Head>
			);
		};
		console.log(GA_TRACKING_ID);
		return (
			<Html lang='en-US'>
				<EnvConditional />
				<Main />
				<NextScript />
			</Html>
		);
	}
}
