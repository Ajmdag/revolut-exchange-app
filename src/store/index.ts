import {Action} from 'redux'
import {ThunkDispatch} from 'redux-thunk'
import app from '../store/reducers/app.reducers'

export type IGetState = () => IStore
export type IDispatch = ThunkDispatch<IStore, undefined, Action>

export default app
