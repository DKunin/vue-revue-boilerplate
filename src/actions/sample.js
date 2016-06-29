export const SAMPLE_LOADING = 'SAMPLE_LOADING';
export const SAMPLE_LOADED = 'SAMPLE_LOADED';

export function sampleLoading() {
    return {
        type: SAMPLE_LOADING
    };
}

export function sampleLoaded(sample) {
    return {
        type: SAMPLE_LOADED,
        sample
    };
}

export function sampleLoad(text) {
    return dispatch => {
        dispatch(sampleLoaded(text));
    };
}
