import { SAMPLE_LOADING, SAMPLE_LOADED } from '../actions/sample';

export default function sample(state = [], action) {
    switch (action.type) {
        case SAMPLE_LOADING:
            return [];

        case SAMPLE_LOADED:
            return action.responce;

        default:
            return state;
    }
}
