import { Action } from '../actions';
import { ActionTypes } from '../action-types';

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const initialState: RepositoriesState = {
    data: [],
    error: null,
    loading: false
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionTypes.SEARCH_REPOSITORIES:
            return {
                loading: true,
                data: [],
                error: null
            }
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case ActionTypes.SEARCH_REPOSITORIES_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;