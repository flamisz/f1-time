const races = {
  'australia': {
    title: 'Formula 1 Rolex Australian Grand Prix 2019',
    times: {
        from: "2019-03-14",
        to: "2019-03-17",
        qualification: "2019-03-16T05:00:00Z",
        race: "2019-03-17T04:10:00Z"
    },
    tz: "Australia/Melbourne"
  },

  'bahrain': {
    title: 'Formula 1 Gulf Air Bahrain Grand Prix 2019',
    times: {
        from: "2019-03-29",
        to: "2019-03-31",
        qualification: "2019-03-30T14:00:00Z",
        race: "2019-03-31T15:10:00Z"
    },
    tz: "Asia/Bahrain"
  },

  'china': {
    title: 'Formula 1 Heineken Chinese Grand Prix 2019',
    times: {
        from: "2019-04-12",
        to: "2019-04-14",
        qualification: "2019-04-13T06:00:00Z",
        race: "2019-04-14T06:10:00Z"
    },
    tz: "Asia/Shanghai"
  },

  'azerbaijan': {
    title: 'Formula 1 Azerbaijan Grand Prix 2019',
    times: {
        from: "2019-04-26",
        to: "2019-04-29",
        qualification: "2019-04-27T13:00:00Z",
        race: "2019-04-28T12:10:00Z"
    },
    tz: "Asia/Baku"
  },

  'spain': {
    title: 'Formula 1 Emirates Gran Premio De España 2019',
    times: {
        from: "2019-05-10",
        to: "2019-05-12",
        qualification: "2019-05-11T13:00:00Z",
        race: "2019-05-12T13:10:00Z"
    },
    tz: "Europe/Madrid"
  },

  'monaco': {
    title: 'Formula 1 Grand Prix De Monaco 2019',
    times: {
        from: "2019-05-23",
        to: "2019-05-26",
        qualification: "2019-05-25T13:00:00Z",
        race: "2019-05-26T13:10:00Z"
    },
    tz: "Europe/Monaco"
  },

  'canada': {
    title: 'Formula 1 Grand Prix De Monaco 2019',
    times: {
        from: "2019-06-07",
        to: "2019-06-09",
        qualification: "2019-06-08T18:00:00Z",
        race: "2019-06-09T18:10:00Z"
    },
    tz: "America/Montreal",
  },
}

export function getRace (id, cb) {
  if (races[id]) {
    cb(null, races[id])
  } else {
    cb(new Error('Race not found.'))
  }
}
