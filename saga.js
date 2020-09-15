import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess } from './actions'

function* loadDataSaga() {
    try {
        const res = yield fetch(process.env.jsonUrl)
        const data = yield res.json()
        yield put(loadDataSuccess(data))
    } catch (err) {
        yield put(failure(err))
    }
}

function* loadEngDataSaga() {
    try {
        const res = yield fetch(process.env.jsonEngUrl)
        const data = yield res.json()
        yield put(loadDataSuccess(data))
    } catch (err) {
        yield put(failure(err))
    }
}

function* rootSaga() {
    yield all([
        takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
        takeLatest(actionTypes.LOAD_ENG_DATA, loadEngDataSaga),
    ])
}

export default rootSaga
