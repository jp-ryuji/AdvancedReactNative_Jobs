import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { INDEED_PUBLISHER_ID } from 'react-native-dotenv';

import {
  FETCH_JOBS,
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: INDEED_PUBLISHER_ID,
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript' // NOTE: This is hard-coded for now. But it should be entered by a user.
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

// NOTE: `(dispatch)` can be just `dispatch`
export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region); // NOTE: reverseGeocode accepts { latitude, longitude }, that are included in `region`
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    // NOTE: 119. Navigating from Actions Creators (This was already added in a previos commit)
    callback();
  } catch(e) {
    console.error(e);
  }
};
