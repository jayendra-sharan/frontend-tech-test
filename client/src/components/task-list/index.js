/**
 * @fileoverview component to iterate over the tasks and render each task using
 * Task Item component. It is also responsible for managing infinte scrolling to
 * load more tasks.
 */
import React from 'react';
import { LoadingOverlay } from 'travix-ui-kit';
import types from './../../constants/types';
import LABELS from '../../constants/labels';
import TaskItem from '../task-item';
import { Scrollbars } from 'react-custom-scrollbars';
import appConstants from '../../constants/appConstants';

class TaskList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pageFetching: false
    }
    this.currentPage = [1, 1, 1];

    // debounce scroll fn.
    this._onScroll = this._debounce (this._onScroll.bind (this), 100);
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.isFetching &&
        this.props.tasks.length !== nextProps.tasks.length) {
      this.setState ({
        pageFetching: false
      });
    }
  }

  _debounce (fn, delay) {
    let timer = 0;
    return () => {
      clearTimeout (timer);
      timer = setTimeout (() => {
        fn.call ();
      }, delay);
    }
  }

  _onScroll (e) {
    const { scrollbar } = this.refs;
    const LIMIT = appConstants.DEFAULTS.DATA_LIMIT;
    const { clientHeight, scrollHeight, scrollTop } = scrollbar.getValues ();
    const shouldPaginate = (scrollHeight - (clientHeight + scrollTop)) < 150;
    const lastTaskId = this.props.tasks[this.props.tasks.length - 1].id;
    if (this.props.tasks.length > (LIMIT - 1)
        && shouldPaginate 
        && !this.state.pageFetching
        && lastTaskId !== '-1') {
      this.setState ({
        pageFetching: true
      });
      const currentTab = this.props.currentTab;
      this.currentPage[currentTab] = this.currentPage[currentTab] + 1;
      this.props.fetchTabData ( currentTab,
                                this.currentPage[currentTab],
                                LIMIT,
                                true);
    }
  }

  render () {
    const { tasks,
            isFetching,
            appErrorStatus,
            updateTask,
            isUpdating,
            id,
            isCreating,
            editThisTask,
            deleteTask,
            isDeleting } = this.props;
    
    return (
      <LoadingOverlay
        loading={(appErrorStatus === -1) && (isFetching || this.state.pageFetching || isCreating) }
        message={ isCreating ? LABELS.TASKS.CREATE_LOADING : LABELS.TASKS.LOADING }
        messageDirectiion='bottom'
        spinner={ true }
        transparency={ isCreating || ((this.state.pageFetching || isFetching) && !!tasks.length) }>
          <Scrollbars
            ref="scrollbar"
            onScroll={ this._onScroll }
            style={{ height: 400 }}>
            {
              (appErrorStatus > 0) ?
                <div className='no-task-in-bucket'>
                  { LABELS.ERROR_MESSAGE[`${appErrorStatus}`] }
                </div>
    
                : // if no error, check for tasks length.
    
                tasks.length ?
                  tasks.map (task => {
                    return (
                      <TaskItem
                        isUpdating={ (isDeleting || isUpdating) && task.id === id }
                        toggleStatus={ (id, task) => {
                          updateTask (id, task);
                        }}
                        task={ task }
                        editTask={ (task) => {
                          editThisTask (task);
                        }}
                        deleteTask={ (id, isComplete) => {
                          deleteTask (id, isComplete);
                        }}
                        key={task.id} />
                      )
                  }) :
                  <div className='no-task-in-bucket'>
                    { LABELS.TASKS.NO_TASKS }
                  </div>
            }
          </Scrollbars>
        </LoadingOverlay>
    );
  }
}

TaskList.propTypes = {
  currentTab: types._number,
  isFetching: types._boolean,
  tasks: types._taskArray,
  appErrorStatus: types._number,
  isUpdating: types._boolean,
  id: types._string,
  isCreating: types._boolean,
  updateTask: types._function,
  fetchTabData: types._function,
  editThisTask: types._function,
  deleteTask: types._function,
  isDeleting: types._boolean
}

export default TaskList;
