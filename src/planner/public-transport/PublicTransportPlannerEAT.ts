import { injectable } from "inversify";
import IJourney from "../IJourney";
import IPublicTransportPlanner from "./IPublicTransportPlanner";

@injectable()
export default class PublicTransportPlannerEAT implements IPublicTransportPlanner {
  public plan: () => Promise<IJourney[]>;

}
