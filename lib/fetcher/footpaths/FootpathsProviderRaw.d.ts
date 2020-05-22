import { IFootpathIndex } from "../../entities/footpaths/footpath";
import { RoutableTileCoordinate } from "../../entities/tiles/coordinate";
import ILocation from "../../interfaces/ILocation";
import IStop from "../stops/IStop";
import IFootpathsProvider from "./IFootpathsProvider";
interface ITiledFootpathIndex {
    [id: string]: Promise<IFootpathIndex>;
}
export default class FootpathsProviderRaw implements IFootpathsProvider {
    protected paths: ITiledFootpathIndex;
    constructor();
    get(stop: IStop): Promise<IFootpathIndex>;
    getIdForLocation(zoom: number, location: ILocation): string;
    getIdForTileCoords(coordinate: RoutableTileCoordinate): string;
    getByLocation(zoom: number, location: ILocation): Promise<IFootpathIndex>;
    getByTileCoords(coordinate: RoutableTileCoordinate): Promise<IFootpathIndex>;
    protected getByUrl(url: string): Promise<IFootpathIndex>;
    protected parseResponseLength(response: any): number;
}
export {};
