import { BoardContext } from "@/context/BoardContext";
import { cn } from "@/utils";
import { Sacramento } from "next/font/google";
import { useContext } from "react";
import Swimlane from "@/components/Swimlane";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });

interface Props {}

const Board = (props: Props) => {
	const board = useContext(BoardContext);

	return (
		<div className="bg-gradient-to-br from-slate-200 to-slate-400 shadow-lg w-full h-full p-1 rounded-lg">
			<div className="w-full h-full bg-slate-50 rounded-md inner-shadow">
				<h1
					className={cn(
						"text-6xl font-black text-slate-900 px-6 pt-8 pb-8 absolute",
						sacramento.className
					)}
				>
					{board?.title}
				</h1>
				<div className="grid grid-cols-4 h-full pt-28 gap-4 p-4">
					{board?.swimlanes.map((swimlane, idx) => (
						<Swimlane data={swimlane} key={idx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Board;
