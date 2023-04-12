import { BoardLayout } from "@/type/BoardLayout";

const defaultBoardLayout: BoardLayout = {
	title: "Draggable",
	swimlanes: [
		{
			title: "To Do",
			items: [
				{
					title: "Card 1",
					id: "1",
				},
				{
					title: "Card 2",
					id: "2",
				},
				{
					title: "Card 3",
					id: "3",
				},
			],
		},
		{
			title: "In Progress",
			items: [
				{
					title: "Card 4",
					id: "4",
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
					id: "5",
				},
			],
		},
	],
};

export { defaultBoardLayout };
