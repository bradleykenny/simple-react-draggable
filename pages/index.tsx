import Board from "@/components/Board";
import { defaultBoardLayout } from "@/config/board";
import { BoardContext } from "@/context/BoardContext";

export default function Home() {
	return (
		<div className="h-screen w-screen bg-gradient-to-br from-blue-400 to-blue-600 p-8">
			<BoardContext.Provider value={defaultBoardLayout}>
				<Board />
			</BoardContext.Provider>
		</div>
	);
}
