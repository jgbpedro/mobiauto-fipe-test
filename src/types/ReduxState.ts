import { StateType } from "typesafe-actions";
import reducers from "../store/ducks";

export type ReduxState = StateType<typeof reducers>;