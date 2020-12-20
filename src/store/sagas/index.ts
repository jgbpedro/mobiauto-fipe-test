import { all } from "redux-saga/effects";
import brands from "../sagas/brands";
import models from "../sagas/models";
import value from "../sagas/value";
import years from "../sagas/years";

export default function*() {
  yield all([
    brands,
    models,
    value,
    years,
  ]);
};