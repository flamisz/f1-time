const races = {
  'australia': {
    title: 'Australian GP',
    times: {
        "qualification": "2019-01-01T10:00:00Z",
        "race": "2019-01-02T11:00:00Z"
    }
  },
  'hungary': {
    title: 'Australian GP',
    times: {
        "qualification": "2019-01-01T10:00:00Z",
        "race": "2019-01-02T11:00:00Z"
    }
  }
}

export function getRace (id, cb) {
  // fake an API request
  setTimeout(() => {
    if (races[id]) {
      cb(null, races[id])
    } else {
      cb(new Error('Race not found.'))
    }
  }, 100)
}
