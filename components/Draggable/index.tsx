import useItemDrag from "@/hooks/useItemDrag";
import { Item } from "@/type/BoardLayout";
import { cn } from "@/utils";

interface Props {
	data: Item;
}

const Draggable = (props: Props) => {
	const { data } = props;
	const {
		ref,
		isActiveDrag,
		handleItemDragStart,
		handleItemDragEnd,
		handleDragEnter,
	} = useItemDrag();

	return (
		<div
			className={cn(
				"shadow border-gray-200 bg-gradient-to-br from-white to-slate-100 rounded-md text-slate-800 p-4",
				isActiveDrag && "opacity-50 ring ring-blue-500"
			)}
			ref={ref}
			draggable
			onDragStart={handleItemDragStart}
			onDragEnd={handleItemDragEnd}
			onDragEnter={(event) => handleDragEnter(event, data.id)}
		>
			<p className="inline bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-sm px-2 py-1 mr-2 rounded-md">
				{data.id}
			</p>
			<p className="inline">{data.title}</p>
		</div>
	);
};

export default Draggable;
