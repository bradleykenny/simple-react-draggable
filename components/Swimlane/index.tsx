import useSwimlaneDrag from "@/hooks/useSwimlaneDrag";
import { Swimlane } from "@/type/BoardLayout";
import { cn } from "@/utils";
import Draggable from "../Draggable";

interface Props {
	data: Swimlane;
}

const Swimlane = (props: Props) => {
	const { data } = props;
	const { items, title } = data;

	const {
		isActiveDrag,
		handleDragOver,
		handleDragLeave,
		handleDragEnter,
		handleDrop,
	} = useSwimlaneDrag();

	return (
		<div className="h-full pb-10">
			<h1 className="text-slate-900 text-md font-semibold ml-2 my-2">
				{title}
			</h1>
			<div
				className={cn(
					"h-full bg-gradient-to-br from-slate-200 to-slate-300 p-4 flex flex-col gap-4 rounded-md transition-all ease-in-out",
					isActiveDrag && "ring ring-blue-500",
					isActiveDrag && title === "Completed" && "ring-green-600 from-green-200 to-green-300"
				)}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDragEnter={(event) => handleDragEnter(event, title)}
				onDrop={handleDrop}
			>
				{items.map((item, idx) => (
					<Draggable data={item} key={idx} />
				))}
			</div>
		</div>
	);
};

export default Swimlane;
