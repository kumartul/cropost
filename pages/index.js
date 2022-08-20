import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeToggler from "../components/ThemeToggler";

const Home = () => {
	return (
		<div>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

				<title>Cropost - Image Cropper for Content Creators in the Cloud</title>
			</Head>

			<Header />
			<ThemeToggler />
			<Footer />
		</div>
	);
}

export default Home;
