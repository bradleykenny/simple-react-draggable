import { useEffect, useRef, useState } from "react";

const useItemDrag = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [isActiveDrag, setIsActiveDrag] = useState(false);

	const handleItemDragStart = (e: DragEvent) => {
		e.dataTransfer?.setData("text/plain", e.target?.id);
		setTimeout(() => {
			setIsActiveDrag(true);
		}, 0);
	};

	const handleItemDragEnd = (e: DragEvent) => {
		setIsActiveDrag(false);
	};

	useEffect(() => {
		const itemRef = ref.current;
		itemRef?.addEventListener("dragstart", handleItemDragStart);
		itemRef?.addEventListener("dragend", handleItemDragEnd);

		return () => {
			itemRef?.removeEventListener("dragstart", handleItemDragStart);
			itemRef?.removeEventListener("dragend", handleItemDragEnd);
		}
	}, []);

	return {ref, isActiveDrag};
};

export default useItemDrag;
