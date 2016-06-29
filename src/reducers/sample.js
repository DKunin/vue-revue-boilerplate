import { SAMPLE_LOADING, SAMPLE_LOADED } from '../actions/sample';

export default function cards(state = [], action) {
    switch (action.type) {

        case SAMPLE_LOADING:
            return [];

        case SAMPLE_LOADED:
            return action.sample;

        default:
            return state;
    }
}
