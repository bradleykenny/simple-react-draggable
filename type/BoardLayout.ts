export interface Item {
    title: string;
}

export interface Swimlane {
    title: string;
    items: Item[];
}

export interface BoardLayout {
    title: string;
    swimlanes: Swimlane[];
}
