import Head from "next/head";

import { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import ImageSelector from "../components/ImageSelector";
import Accordion from "../components/Accordion";
import ControlButtons from "../components/ControlButtons/ControlButtons";
import Card from "../components/Card";
import ThemeToggler from "../components/ThemeToggler";
import Footer from "../components/Footer";

import { Cropper } from "react-cropper";
import 'cropperjs/dist/cropper.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import resolutions from "../utils/resolution";

const Home = () => {
	const [image, setImage] = useState(null);
	const [finalImage, setFinalImage] = useState(null);
	const [imageSrc, setImageSrc] = useState("");
	const [cropper, setCropper] = useState(null);
	const [dragArea, setDragArea] = useState({
		width: 480,
		height: 480
	});
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [activeResolution, setActiveResolution] = useState("");
	const [activeResolutionDescription, setActiveResolutionDescription] = useState("");
	const [resolution, setResolution] = useState({
		width: 0,
		height: 0
	});

	const cropperRef = useRef(null);

	useEffect(() => {
		setFinalImage(imageSrc);

		setActiveResolution(Object.keys(resolutions[0])[0]);
		setActiveResolutionDescription(resolutions[0]["GitHub"][0].description);

		setDragArea({
			width: resolutions[0]["GitHub"][0].width,
			height: resolutions[0]["GitHub"][0].height
		});
		setResolution({
			width: resolutions[0]["GitHub"][0].width,
			height: resolutions[0]["GitHub"][0].height
		});
	}, []);

	const onChange = event => {
		event.preventDefault();

		const files = event.target.files;

		if(files.length > 0) {
			if(files[0].type.includes("image")) {
				const reader = new FileReader();
				reader.onload = () => setImageSrc(reader.result);
				reader.readAsDataURL(files[0]);

				setImage(files[0]);
			}
			else {
				toast.error("Please select an image file");
			}
		}
	}

	const onCropperInitialized = instance => {
		setCropper(instance);
	}

	const onCrop = () => {
		const cropper = cropperRef.current.cropper;

		setDragArea({
			...dragArea,
			width: cropper.getCroppedCanvas().width,
			height: cropper.getCroppedCanvas().height
		});

		setX(cropper.getData().x);
		setY(cropper.getData().y);

		setFinalImage(cropper.getCroppedCanvas().toDataURL());
	}

	const deleteImage = () => {
		setImage(null);
	}

	const onResolutionChange = (title, description, width, height) => {
		setActiveResolution(title);
		setActiveResolutionDescription(description);
		setDragArea({
			width,
			height
		});
		setResolution({
			width,
			height
		});
		cropper.setData({
			width,
			height,
			x: (883 - width) / 2,
			y: (480 - height) / 2
		});
	}

	return (
		<div>
			<Head>
				{/* Required meta tags */}
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Best Image Cropper for Content Creators" />
				<meta name="keywords" content="image, cropper, image cropper, content, creators, images, cropost" />
				<meta name="author" content="Atul Kumar" />

				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="Cropost ✂️" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://cropost.vercep.app" />
				<meta property="og:image" content="https://cropost.vercel.app/mockup.png" />
				<meta property="og:description" content="" />
				<meta property="og:site_name" content="Cropost" />
				<meta property="og:locale" content="en_US" />

				{/* Twitter Meta Tags */}
				<meta property="twitter:card" content="summary" />
				<meta property="twitter:title" content="Cropost" />
				<meta property="twitter:description" content="The best Image Cropper for Content Creators ✂️" />
				<meta property="twitter:image" content="https://cropost.vercel.app/favicon.ico" />
				<meta property="twitter:image:alt" content="Cropost Logo" />
				<meta property="twitter:site" content="@kumartul001" />
				<meta property="twitter:creator" content="@kumartul001" />

				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

				<title>Cropost - Image Cropper for Content Creators in the Cloud</title>
			</Head>

			<Header />

			<main className="flex items-center justify-between w-full h-full mt-[2px]">
				{
					!image ? (
						<ImageSelector onChange={onChange} />
					) : (
						<div className="flex space-x-1 w-full">
							<Accordion
								resolutions={resolutions}
								onResolutionChange={onResolutionChange}
							/>

							<div className="relative flex-[0.6] flex flex-col justify-evenly p-4 h-[79vh] bg-[#ddd] dark:bg-[#222] rounded-lg">
								<Cropper
									src={imageSrc}
									className="!h-[480px] !w-full"
									aspectRatio={resolution.width / resolution.height}
									guides={true}
									crop={onCrop}
									ref={cropperRef}
									viewMode={2}
									preview=".preview"
									onInitialized={onCropperInitialized}
								/>

								<ControlButtons cropper={cropper} />
							</div>

							<Card
								imagePreview={finalImage}
								imageName={image.name}
								imageType={image.type}
								deleteImage={deleteImage}
								width={dragArea.width}
								height={dragArea.height}
								activeResolution={activeResolution}
								activeResolutionDescription={activeResolutionDescription}
							/>
						</div>
					)
				}
			</main>

			<ThemeToggler />
			<Footer />

			<ToastContainer
				position='top-right'
				autoClose={4000}
				newestOnTop={true}
				closeOnClick={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
			/>
		</div>
	);
}

export default Home;
