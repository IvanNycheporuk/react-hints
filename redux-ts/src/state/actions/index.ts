import { ActionTypes } from '../action-types/index';

interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
    payload: string
}

export type Action =
    SearchRepositoriesAction |
    SearchRepositoriesSuccessAction |
    SearchRepositoriesErrorAction;