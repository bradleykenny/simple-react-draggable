import useItemDrag from "@/hooks/useItemDrag";
import { Item } from "@/type/BoardLayout";
import { cn } from "@/utils";

interface Props {
	data: Item;
}

const Draggable = (props: Props) => {
	const { data } = props;
	const {ref, isActiveDrag, handleItemDragStart, handleItemDragEnd} = useItemDrag();

	return (
		<div
			className={cn("shadow border-gray-200 bg-white rounded-md text-slate-800 p-4", isActiveDrag && "opacity-50 ring ring-blue-500")}
			ref={ref}
			draggable
			onDragStart={handleItemDragStart}
			onDragEnd={handleItemDragEnd}
		>
			<p>{data.title}</p>
		</div>
	);
};

export default Draggable;
