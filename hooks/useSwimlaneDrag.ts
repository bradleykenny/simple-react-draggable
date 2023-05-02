import { DragEvent, useContext, useState } from "react";
import { BoardContext } from "@/context/BoardContext";
import { Item } from "@/type/BoardLayout";

const useSwimlaneDrag = () => {
	const [isActiveDrag, setIsActiveDrag] = useState(false);
	const boardContext = useContext(BoardContext);

	const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsActiveDrag(true);
	};

	const handleDragLeave = () => {
		setIsActiveDrag(false);
	};

	const handleDragEnter = (event: DragEvent<HTMLDivElement>, title: string) => {
		event.preventDefault();
	};

	const handleDrop = (event: DragEvent<HTMLDivElement>, title: string) => {
		event.preventDefault();
		setIsActiveDrag(false);

		const droppedItem = event.dataTransfer?.getData("content");

		const { board, setBoard } = boardContext;
		let dropped: Item;

		const tempBoard = { ...board };
		
		tempBoard.swimlanes.forEach(swimlane => {
			const hasItem = swimlane.items.find(item => item.id === droppedItem);
			if (hasItem) {
				dropped = hasItem;
			}
			
			swimlane.items = swimlane.items.filter(item => {
				console.log(item.id, droppedItem, item.id !== droppedItem);
				return item.id !== droppedItem
			});
		});

		tempBoard.swimlanes.forEach(swimlane => {
			if (swimlane.title === title) {
				swimlane.items.push(dropped);
			}
		})
		
		// const finalSwimlane = filteredNewSwimlanes.find
		setBoard(tempBoard);
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
