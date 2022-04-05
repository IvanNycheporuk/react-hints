import axios from "axios";
import { Dispatch } from "react";

import { ActionTypes } from '../action-types';
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
    return async (dispath: Dispatch<Action>) => {
        dispath({
            type: ActionTypes.SEARCH_REPOSITORIES
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });

            let packagesNames = data.objects.map((res: any) => res.package.name);

            dispath({
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                payload: packagesNames
            })

        } catch (err) {
            dispath({
                type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: 'err.message'
            })
        }
    }
}
