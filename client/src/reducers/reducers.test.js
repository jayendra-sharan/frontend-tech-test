/**
 * @fileoverview Test Suite: For app reducer.
 * @author Jayendra Sharan (http://jayendra.co.in)
 */
import { initialState, appData } from '.';
import actionTypes from '../constants/actionTypes';
import mockServer from '../constants/mockServer';

describe ('Reducer of the application', () => {
  it ('should return intial state of the application by default', () => {
    expect (appData (undefined, {})).toEqual (initialState);
  });

  it ('should handle the fetch_app_data_start action', () => {
    const startAction = {
      type: actionTypes.APP_DATA.FETCH_APP_DATA_START,
      tab: 0
    }

    const expectedState = {
      ...initialState,
      fetchingAllData: true
    }

    expect (appData (undefined, startAction)).toEqual (expectedState);
  });

  it ('should handle the fetch_app_data_success action', () => {

    const successAction = {
      type: actionTypes.APP_DATA.FETCH_APP_DATA_SUCCESS,
      data: mockServer.fetchAppDataSuccess.data
    }

    const expectedState = {
      ...initialState,
      fetchingAllData: false,
      allCount: mockServer.fetchAppDataSuccess.data.allCount,
      doneCount: mockServer.fetchAppDataSuccess.data.doneCount,
      pendingCount: mockServer.fetchAppDataSuccess.data.pendingCount,
      allTasks: mockServer.fetchAppDataSuccess.data.tasks
    }

    expect (appData (undefined, successAction)).toEqual (expectedState);

  });

  it ('should handle the update_count action', () => {
    const updateAction = {
      type: actionTypes.APP_DATA.UPDATE_COUNT,
      allCount: mockServer.sampleTask.allCount,
      doneCount: mockServer.sampleTask.doneCount,
      pendingCount: mockServer.sampleTask.pendingCount
    }

    const expectedState = {
      ...initialState,
      allCount: mockServer.sampleTask.allCount,
      doneCount: mockServer.sampleTask.doneCount,
      pendingCount: mockServer.sampleTask.pendingCount
    }

    expect (appData (undefined, updateAction)).toEqual (expectedState);
  });

  it ('should handle the fetch_app_data_failed action', () => {
    // same as app error.
  });
});

