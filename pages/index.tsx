import Board from "@/components/Board";
import { defaultBoardLayout } from "@/config/board";
import { BoardContext } from "@/context/BoardContext";
import useBoardLayout from "@/hooks/useBoardArrange";

export default function Home() {
	const { board, setBoard } = useBoardLayout(defaultBoardLayout);

	return (
		<div className="h-screen w-screen bg-gradient-to-br from-blue-400 to-blue-600 p-8">
			<BoardContext.Provider value={{ board, setBoard }}>
				<Board />
			</BoardContext.Provider>
		</div>
	);
}
