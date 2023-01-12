import { PayloadAction } from '@reduxjs/toolkit'
import { put, spawn, call } from 'redux-saga/effects'
import { ICategoryItem, IQuery } from '../../../models'
import { fetchAPI } from '../../../utils/fetchAPI'
import {
  addItemsFailure,
  addItemsRequest,
  addItemsSuccess,
  getItemsFailure,
  getItemsRequest,
  getItemsSuccess,
} from '../slices/productsSlice'

import * as Eff from 'redux-saga/effects'
const takeLatest: any = Eff.takeLatest

// items

function* handleGetItemsSaga(action: PayloadAction<IQuery>) {
  try {
    const data: ICategoryItem[] = yield call(fetchAPI, action.payload)
    yield put(getItemsSuccess(data))
  } catch (e) {
    yield put(getItemsFailure(true))
  }
}

function* watchGetItemsSaga() {
  yield takeLatest(getItemsRequest, handleGetItemsSaga)
}

// moreItems

function* handleAddItemsSaga(action: PayloadAction<IQuery>) {
  try {
    const data: ICategoryItem[] = yield call(fetchAPI, action.payload)
    yield put(addItemsSuccess(data))
  } catch (e) {
    yield put(addItemsFailure(true))
  }
}

function* watchAddItemsSaga() {
  yield takeLatest(addItemsRequest, handleAddItemsSaga)
}

export default function* saga() {
  yield spawn(watchGetItemsSaga)
  yield spawn(watchAddItemsSaga)
}
