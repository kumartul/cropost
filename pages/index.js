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

	const cropperRef = useRef(null);

	useEffect(() => {
		setFinalImage(imageSrc);

		setActiveResolution(Object.keys(resolutions[0])[0]);
		setActiveResolutionDescription(resolutions[0]["GitHub"][0].description);

		setDragArea({
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
			width: width,
			height: height
		});
		cropper.setData({
			width,
			height,
			x: (883 - width) / 2,
			y: (500 - height) / 2
		});
	}

	return (
		<div>
			<Head>
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
									className="!h-auto w-full"
									aspectRatio={dragArea.width / dragArea.height}
									guides={true}
									crop={onCrop}
									ref={cropperRef}
									viewMode={2}
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
