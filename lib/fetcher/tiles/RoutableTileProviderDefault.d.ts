import { RoutableTileCoordinate } from "../../entities/tiles/coordinate";
import RoutableTileRegistry from "../../entities/tiles/registry";
import { RoutableTileSet } from "../../entities/tiles/set";
import { IRoutableTileIndex, RoutableTile } from "../../entities/tiles/tile";
import ILocation from "../../interfaces/ILocation";
import IRoutableTileFetcher from "./IRoutableTileFetcher";
import IRoutableTileProvider from "./IRoutableTileProvider";
export default class RoutableTileProviderDefault implements IRoutableTileProvider {
    protected fetcher: IRoutableTileFetcher;
    protected registry: RoutableTileRegistry;
    protected tiles: IRoutableTileIndex;
    constructor(fetcher: IRoutableTileFetcher);
    wait(): Promise<void>;
    getIdForLocation(zoom: number, location: ILocation): string;
    getIdForTileCoords(coordinate: RoutableTileCoordinate): string;
    getByLocation(zoom: number, location: ILocation): Promise<RoutableTile>;
    getByTileCoords(coordinate: RoutableTileCoordinate): Promise<RoutableTile>;
    getByUrl(url: string): Promise<RoutableTile>;
    getMultipleByUrl(urls: string[]): Promise<RoutableTileSet>;
    getmultipleByLocation(zoom: number, locations: ILocation[]): Promise<RoutableTileSet>;
    getMultipleByTileCoords(coordinates: RoutableTileCoordinate[]): Promise<RoutableTileSet>;
    private long2tile;
    private lat2tile;
}
