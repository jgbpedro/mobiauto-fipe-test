import { mapValues } from "lodash";
import { useCallback } from "react";
import { useDispatch } from "redux-react-hook";

export function useMappedActions<T>(actionsObj: T): T {
  const dispatch = useDispatch();
  // @ts-ignore
  return mapValues(actionsObj, value =>
    // @ts-ignore
    useCallback(x => dispatch(value(x)), [])
  );
}