import { BoardLayout } from "@/type/BoardLayout";

const defaultBoardLayout: BoardLayout = {
	title: "Draggable",
	swimlanes: [
		{
			title: "To Do",
			items: [
				{
					title: "Card 1",
				},
				{
					title: "Card 2",
				},
				{
					title: "Card 3",
				},
			],
		},
		{
			title: "In Progress",
			items: [
				{
					title: "Card 4",
				},
			],
		},
		{
			title: "In Review",
			items: [],
		},
		{
			title: "Completed",
			items: [
				{
					title: "Card 5",
				},
			],
		},
	],
};

export { defaultBoardLayout };
