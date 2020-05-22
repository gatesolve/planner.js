import Profile from "../entities/profile/Profile";
import { IRoutableTileNodeIndex } from "../entities/tiles/node";
import { RoutableTile } from "../entities/tiles/tile";
import { IRoutableTileWayIndex } from "../entities/tiles/way";
import ProfileProvider from "../fetcher/profiles/ProfileProviderDefault";
import ILocation from "../interfaces/ILocation";
import ILocationResolver from "../query-runner/ILocationResolver";
import PathfindingGraph from "./graph";
import { IShortestPathAlgorithm, IShortestPathInstance, IShortestPathTreeAlgorithm, IShortestPathTreeInstance } from "./pathfinder";
export default class PathfinderProvider {
    private graphs;
    private shortestPath;
    private shortestPathTree;
    private routableTileRegistry;
    private profileProvider;
    private locationResolver;
    private embedded;
    private embeddings;
    constructor(shortestPathTree: IShortestPathTreeAlgorithm, pointToPoint: IShortestPathAlgorithm, profileProvider: ProfileProvider, locationResolver: ILocationResolver);
    getShortestPathAlgorithm(profile: Profile): IShortestPathInstance;
    getShortestPathTreeAlgorithm(profile: Profile): IShortestPathTreeInstance;
    registerEdges(ways: IRoutableTileWayIndex, nodes: IRoutableTileNodeIndex): Promise<void>;
    embedLocation(p: ILocation, tileset: RoutableTile, invert?: boolean): Promise<void>;
    getGraphForProfile(profile: Profile): PathfindingGraph;
    private addEdge;
    private segmentDistToPoint;
    private projectOntoSegment;
}
