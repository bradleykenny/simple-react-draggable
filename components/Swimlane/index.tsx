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

	const { ref, isActiveDrag } = useSwimlaneDrag();

	return (
		<div className="h-full pb-10">
			<h1 className="text-slate-900 text-md font-semibold ml-2 my-2">
				{title}
			</h1>
			<div
				className={cn(
					"h-full bg-slate-200 p-4 flex flex-col gap-4 rounded-md",
					isActiveDrag && "ring ring-blue-500"
				)}
				ref={ref}
			>
				{items.map((item, idx) => (
					<Draggable data={item} key={idx} />
				))}
			</div>
		</div>
	);
};

export default Swimlane;
