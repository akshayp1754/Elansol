import {combineReducers} from 'redux'

import authReducer from './auth'
import categoryReducer from './category'
import userReducer from './registerUser'

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    user: userReducer
})

export default rootReducer