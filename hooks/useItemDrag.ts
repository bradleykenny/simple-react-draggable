import { DragEvent, useRef, useState } from "react";

const useItemDrag = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [isActiveDrag, setIsActiveDrag] = useState(false);

	const handleItemDragStart = (event: DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData(
			"content",
			event.nativeEvent.target.outerHTML
		); // TODO: fix this up properly
		setTimeout(() => {
			setIsActiveDrag(true);
		}, 0);
	};

	const handleItemDragEnd = () => {
		setIsActiveDrag(false);
	};

	return { ref, isActiveDrag, handleItemDragStart, handleItemDragEnd };
};

export default useItemDrag;
