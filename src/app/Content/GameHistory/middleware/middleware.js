import async from 'async'

import * as ajax from './ajax'
import * as action from '../action/action'
import * as loaderAction from '../action/loaderAction'
import { handle } from './handleResponse'
import { logout } from '../../../User/middleware/middleware'

export const listGames = () => {

    return dispatch => {

		dispatch(loaderAction.tableLoaderOn())
        ajax.listGames((status, response) => {
            if(status === 401) dispatch(handleUnauthorized())
            if(status === 200) dispatch(action.listGames(response))
			dispatch(loaderAction.tableLoaderOff())
        })

    }
}

const handleUnauthorized = () => {
    return dispatch => {
        dispatch(logout({message: 'Your token is invalid or expired, you will be redirected to the log-in page'}))
    }
}
