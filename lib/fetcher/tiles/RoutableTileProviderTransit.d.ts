import { RoutableTileCoordinate } from "../../entities/tiles/coordinate";
import IRoutableTileFetcher from "./IRoutableTileFetcher";
import RoutableTileProviderDefault from "./RoutableTileProviderDefault";
export default class RoutableTileProviderTransit extends RoutableTileProviderDefault {
    constructor(fetcher: IRoutableTileFetcher);
    getIdForTileCoords(coordinate: RoutableTileCoordinate): string;
}
