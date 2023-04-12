import { DragEvent, useState } from "react";

const useSwimlaneDrag = () => {
	const [isActiveDrag, setIsActiveDrag] = useState(false);

	const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsActiveDrag(true);
	};

	const handleDragLeave = () => {
		setIsActiveDrag(false);
	};

	const handleDragEnter = (event: DragEvent<HTMLDivElement>, title: string) => {
		event.preventDefault();

		console.log('swimlane enter...', title)
	};

	const handleDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsActiveDrag(false);

		const droppedItem = event.dataTransfer?.getData("content");
		console.log(droppedItem);
	};

	return {
		isActiveDrag,
		handleDragOver,
		handleDragLeave,
		handleDragEnter,
		handleDrop,
	};
};

export default useSwimlaneDrag;
