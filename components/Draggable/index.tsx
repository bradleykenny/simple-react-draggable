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
		isBeingDraggedOver,
		handleItemDragStart,
		handleItemDragEnd,
		handleDragEnter,
		handleDragLeave,
	} = useItemDrag();

	return (
		<div>
			<div
				className={cn(
					"h-0.5 w-full bg-transparent rounded-full my-2",
					isBeingDraggedOver && "opacity-100 bg-gray-500"
				)}
			/>
			<div
				className={cn(
					"shadow border-gray-200 bg-gradient-to-br from-white to-slate-100 rounded-md text-slate-800 p-4",
					isActiveDrag && "opacity-50 ring ring-blue-500"
				)}
				ref={ref}
				draggable
				onDragStart={(event) => handleItemDragStart(event, data.id)}
				onDragEnd={handleItemDragEnd}
				onDragEnter={(event) => handleDragEnter(event, data.id)}
				onDragLeave={handleDragLeave}
			>
				<p className="inline bg-gradient-to-br from-indigo-400 to-indigo-600 text-white font-bold text-sm px-2 py-1 mr-2 rounded-md">
					{data.id}
				</p>
				<p className="inline">{data.title}</p>
			</div>
		</div>
	);
};

export default Draggable;
