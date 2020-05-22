import { IEntity } from "../../loader/common";
import { RoutableTileNode } from "../tiles/node";
import { RoutableTileWay } from "../tiles/way";
export default class ProfileValueReference implements IEntity {
    static create(id: string): ProfileValueReference;
    id: string;
    from: string;
    constructor(id: string);
    getID(): string;
    resolve(element: RoutableTileNode | RoutableTileWay): any;
}
