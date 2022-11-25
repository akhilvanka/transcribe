import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class BlogDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true' />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
						rel="stylesheet"
						crossOrigin='true'
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;500&display=swap"
						rel="stylesheet"
						crossOrigin='true'
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
