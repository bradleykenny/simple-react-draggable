import { useEffect, useRef, useState } from "react";

const useSwimlaneDrag = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [isActiveDrag, setIsActiveDrag] = useState(false);

	const handleDragOver = (e: DragEvent) => {
		e.preventDefault();
		setIsActiveDrag(true);
	};

	const handleDragLeave = () => {
		setIsActiveDrag(false)
	};

	const handleDragEnter = (e: DragEvent) => {
		e.preventDefault();
	};

	const handleDrop = (e: DragEvent) => {
		e.preventDefault();
		setIsActiveDrag(false);
		
		const id = e.dataTransfer?.getData("text/plain");

		if (id) {
			const draggable = document.getElementById(id);
			e.target?.appendChild(draggable);
		}
	};

	useEffect(() => {
		const swimlaneRef = ref.current;
		swimlaneRef?.addEventListener("dragover", handleDragOver);
		swimlaneRef?.addEventListener("dragleave", handleDragLeave);
		swimlaneRef?.addEventListener("dragenter", handleDragEnter);
		swimlaneRef?.addEventListener("drop", handleDrop);

		return () => {
			swimlaneRef?.removeEventListener("dragover", handleDragOver);
			swimlaneRef?.removeEventListener("dragleave", handleDragLeave);
			swimlaneRef?.removeEventListener("dragenter", handleDragEnter);
			swimlaneRef?.removeEventListener("drop", handleDrop);
		};
	}, []);

	return { ref, isActiveDrag };
};

export default useSwimlaneDrag;
