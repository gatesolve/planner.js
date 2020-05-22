import { IRoutableTileNodeIndex } from "../../entities/tiles/node";
import RoutableTileRegistry from "../../entities/tiles/registry";
import { RoutableTile } from "../../entities/tiles/tile";
import { IRoutableTileWayIndex } from "../../entities/tiles/way";
import PathfinderProvider from "../../pathfinding/PathfinderProvider";
import IRoutableTileFetcher from "./IRoutableTileFetcher";
export default class RoutableTileFetcherRaw implements IRoutableTileFetcher {
    protected mapping: object;
    protected pathfinderProvider: PathfinderProvider;
    protected routableTileRegistry: RoutableTileRegistry;
    constructor(pathfinderProvider: PathfinderProvider);
    get(url: string): Promise<RoutableTile>;
    protected parseResponseLength(response: any): number;
    protected processTileData(url: string, nodes: IRoutableTileNodeIndex, ways: IRoutableTileWayIndex): RoutableTile;
    private createNode;
    private createWay;
}
