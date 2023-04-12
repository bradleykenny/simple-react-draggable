import { BoardLayout } from "@/type/BoardLayout";
import { createContext, Dispatch, SetStateAction } from "react";

interface IBoardContextProps {
	board: BoardLayout;
	setBoard: Dispatch<SetStateAction<BoardLayout>>;
};

export const BoardContext = createContext<IBoardContextProps>({
	board: {
        title: '',
        swimlanes: []
    },
	setBoard: () => {},
});
