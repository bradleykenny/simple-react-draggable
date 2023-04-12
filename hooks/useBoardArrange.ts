import { BoardLayout } from "@/type/BoardLayout";
import { useState } from "react";

const useBoardLayout = (initialBoard: BoardLayout) => {
    const [board, setBoard] = useState<BoardLayout>(initialBoard);

    // TODO: some complex logic about re-arranging the board

    return { board, setBoard };
}

export default useBoardLayout;
