import {
    FETCH_LECTURE_SCHEDULES_LOADING,
    FETCH_LECTURE_SCHEDULES_SUCCESS,
    FETCH_LECTURE_SCHEDULES_FAILURE
} from './roomType';

const initialState = {
    lectureSchedules: {
        loading: false,
        data: [],
        error: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LECTURE_SCHEDULES_LOADING:
            return {
                ...state,
                lectureSchedules: {
                    loading: true,
                    data: [],
                    error: null
                }
            }
        case FETCH_LECTURE_SCHEDULES_SUCCESS:
            return {
                ...state,
                lectureSchedules: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case FETCH_LECTURE_SCHEDULES_FAILURE:
            return {
                ...state,
                lectureSchedules: {
                    loading: false,
                    data: [],
                    error: action.payload
                }
            }
        default: return state
    }
}
export default reducer;