import { RoutableTileNode } from "./RoutableTileNode";
import { RoutableTileWay } from "./RoutableTileWay";
export default class RoutableTileRegistry {
    static getInstance(): RoutableTileRegistry;
    private static instance;
    private nodes;
    private ways;
    constructor();
    registerNode(node: RoutableTileNode): void;
    registerWay(way: RoutableTileWay): void;
    getNode(id: string): RoutableTileNode;
    getWay(id: string): RoutableTileWay;
    getNodes(): RoutableTileNode[];
    getWays(): RoutableTileWay[];
}
