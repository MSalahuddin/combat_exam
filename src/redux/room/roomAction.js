import {
    FETCH_LECTURE_SCHEDULES_LOADING,
    FETCH_LECTURE_SCHEDULES_SUCCESS,
    FETCH_LECTURE_SCHEDULES_FAILURE
} from './roomType';
import axios from 'axios';
import { apiBaseUrl } from './../';

const fetchLectureSchedulesLoading = () => {
    return {
        type: FETCH_LECTURE_SCHEDULES_LOADING
    }
}
const fetchLectureSchedulesSuccess = (data) => {
    return {
        type: FETCH_LECTURE_SCHEDULES_SUCCESS,
        payload: data
    }
}
const fetchLectureSchedulesFailure = (error) => {
    return {
        type: FETCH_LECTURE_SCHEDULES_FAILURE,
        payload: error
    }
}
export const fetchLectureSchedules = () => {
    return dispatch => {
        dispatch(fetchLectureSchedulesLoading());
        // axios.get(`${apiBaseUrl}/api/auth/all-lecture-schedule`)
        axios.get(`https://www.shoaib.combatexam.com/api/auth/all-lecture-schedule`)
            .then(res => {
                dispatch(fetchLectureSchedulesSuccess(res.data.lecture_schedules));
            })
            .catch(err => {
                dispatch(fetchLectureSchedulesFailure(err));
            })
    }
}