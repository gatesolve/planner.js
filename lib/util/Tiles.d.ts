import { RoutableTileCoordinate } from "../entities/tiles/coordinate";
export declare function lat_to_tile(lat: number, zoom: number): number;
export declare function long_to_tile(lon: number, zoom: number): number;
export declare function toTileCoordinate(lat: number, long: number, zoom?: number): RoutableTileCoordinate;
