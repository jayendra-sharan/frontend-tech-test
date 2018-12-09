const mockServer = {
  'sampleTask': {
    'data': {
      'task': {
        'id': 'T-2714fa55d3a714d1f75511',
        'title': 'Test title 0',
        'description': 'Test description 0',
        'isCompleted': true,
        'createdAt': 1544260778133,
        'lastUpdatedAt': 1544260778133
      },
      allCount: 100,
      doneCount: 65,
      pendingCount: 35
    }
  },
  'updateRequestId': 'T-2714fa55d3a714d1f75511',
  'updateRequest': {
    'title': 'Updated title 0',
    'description': 'Updated Test description 0',
    'isCompleted': false
  },
  'fetchAppDataSuccess': {
    'data': {
      'tasks': [
        {
          'id': 'T-2714fa55d3a714d1f75511',
          'title': 'Test title 0',
          'description': 'Test description 0',
          'isCompleted': true,
          'createdAt': 1544260778133,
          'lastUpdatedAt': 1544260778133
        },
        {
          'id': 'T-a2cb2d4093c110dc961dfb',
          'title': 'Test title 1',
          'description': 'Test description 1',
          'isCompleted': false,
          'createdAt': 1544260778133,
          'lastUpdatedAt': 1544260778133
        }
      ],
      'allCount': 2,
      'doneCount': 1,
      'pendingCount': 1
    },
    'tab': 0
  },
  'fetchAppDataError': {
    'message': 'Something went wrong!'
  },
  'updateFailed': {
    'message': 'Update failed.'
  }
};

export default mockServer;
