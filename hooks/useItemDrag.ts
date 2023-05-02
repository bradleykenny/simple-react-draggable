import { DragEvent, useRef, useState } from "react";

const useItemDrag = () => {
	const ref = useRef<HTMLDivElement>(null);
	
	const [isActiveDrag, setIsActiveDrag] = useState(false);
	const [isBeingDraggedOver, setIsBeingDraggedOver] = useState(false);

	const handleItemDragStart = (event: DragEvent<HTMLDivElement>, id: string) => {
		event.dataTransfer.setData("content", id);
		setTimeout(() => {
			setIsActiveDrag(true);
		}, 0);
	};

	const handleItemDragEnd = () => {
		setIsActiveDrag(false);
	};

	const handleDragEnter = (event: DragEvent<HTMLDivElement>, id: string) => {
		setIsBeingDraggedOver(true);
	};

	const handleDragLeave = () => {
		setIsBeingDraggedOver(false);
	}

	return {
		ref,
		isActiveDrag,
		isBeingDraggedOver,
		handleItemDragStart,
		handleItemDragEnd,
		handleDragEnter,
		handleDragLeave
	};
};

export default useItemDrag;
