import { combineReducers} from 'redux'
import counterReducer from './counter_reducer'
import postReducer from './post_reducer'
import photosReducer from './photo_reducer';

const rootReducers = combineReducers({
    counter: counterReducer,
    post: postReducer,
    photo: photosReducer
});
export default rootReducers 

