const races = {
  'australia': {
    title: 'Formula 1 Rolex Australian Grand Prix 2019',
    times: {
        from: "2019-03-14",
        to: "2019-03-17",
        qualification: "2019-03-16T05:00:00Z",
        race: "2019-03-17T04:10:00Z"
    },
    tz: "Australia/Melbourne",
    circuit_id: "albert_park"
  },

  'bahrain': {
    title: 'Formula 1 Gulf Air Bahrain Grand Prix 2019',
    times: {
        from: "2019-03-29",
        to: "2019-03-31",
        qualification: "2019-03-30T14:00:00Z",
        race: "2019-03-31T15:10:00Z"
    },
    tz: "Asia/Bahrain",
    circuit_id: "bahrain"
  },

  'china': {
    title: 'Formula 1 Heineken Chinese Grand Prix 2019',
    times: {
        from: "2019-04-12",
        to: "2019-04-14",
        qualification: "2019-04-13T06:00:00Z",
        race: "2019-04-14T06:10:00Z"
    },
    tz: "Asia/Shanghai",
    circuit_id: "shanghai"
  },

  'azerbaijan': {
    title: 'Formula 1 Azerbaijan Grand Prix 2019',
    times: {
        from: "2019-04-26",
        to: "2019-04-29",
        qualification: "2019-04-27T13:00:00Z",
        race: "2019-04-28T12:10:00Z"
    },
    tz: "Asia/Baku",
    circuit_id: "BAK"
  },

  'spain': {
    title: 'Formula 1 Emirates Gran Premio De España 2019',
    times: {
        from: "2019-05-10",
        to: "2019-05-12",
        qualification: "2019-05-11T13:00:00Z",
        race: "2019-05-12T13:10:00Z"
    },
    tz: "Europe/Madrid",
    circuit_id: "catalunya"
  },

  'monaco': {
    title: 'Formula 1 Grand Prix De Monaco 2019',
    times: {
        from: "2019-05-23",
        to: "2019-05-26",
        qualification: "2019-05-25T13:00:00Z",
        race: "2019-05-26T13:10:00Z"
    },
    tz: "Europe/Monaco",
    circuit_id: "monaco"
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
    circuit_id: "villeneuve"
  },

  'france': {
    title: 'Formula 1 Grand Prix De France 2019',
    times: {
        from: "2019-06-21",
        to: "2019-06-23",
        qualification: "2019-06-22T13:00:00Z",
        race: "2019-06-23T13:10:00Z"
    },
    tz: "Europe/Paris",
    circuit_id: "ricard"
  },

  'austria': {
    title: 'Formula 1 Myworld Grosser Preis Von Österreich 2019',
    times: {
        from: "2019-06-28",
        to: "2019-06-30",
        qualification: "2019-06-29T13:00:00Z",
        race: "2019-06-30T13:10:00Z"
    },
    tz: "Europe/Vienna",
    circuit_id: "red_bull_ring"
  },

  'great-britain': {
    title: 'Formula 1 Rolex British Grand Prix 2019',
    times: {
        from: "2019-07-12",
        to: "2019-07-14",
        qualification: "2019-07-13T13:00:00Z",
        race: "2019-07-14T13:10:00Z"
    },
    tz: "Europe/London",
    circuit_id: "silverstone"
  },

  'germany': {
    title: 'Formula 1 Mercedes-benz Grosser Preis Von Deutschland 2019',
    times: {
        from: "2019-07-26",
        to: "2019-07-28",
        qualification: "2019-07-27T13:00:00Z",
        race: "2019-07-28T13:10:00Z"
    },
    tz: "Europe/Berlin",
    circuit_id: "hockenheimring"
  },

  'hungary': {
    title: 'Formula 1 Rolex Magyar Nagydíj 2019',
    times: {
        from: "2019-08-02",
        to: "2019-08-04",
        qualification: "2019-08-03T13:00:00Z",
        race: "2019-08-04T13:10:00Z"
    },
    tz: "Europe/Budapest",
    circuit_id: "hungaroring"
  },

  'belgium': {
    title: 'Formula 1 Johnnie Walker Belgian Grand Prix 2019',
    times: {
        from: "2019-08-30",
        to: "2019-09-01",
        qualification: "2019-08-31T13:00:00Z",
        race: "2019-09-01T13:10:00Z"
    },
    tz: "Europe/Brussels",
    circuit_id: "spa"
  },

  'italy': {
    title: 'Formula 1 Gran Premio Heineken D\'Italia 2019',
    times: {
        from: "2019-09-06",
        to: "2019-09-08",
        qualification: "2019-09-07T13:00:00Z",
        race: "2019-09-08T13:10:00Z"
    },
    tz: "Europe/Rome",
    circuit_id: "monza"
  },

  'singapore': {
    title: 'Formula 1 Singapore Airlines Singapore Grand Prix 2019',
    times: {
        from: "2019-09-20",
        to: "2019-09-22",
        qualification: "2019-09-21T13:00:00Z",
        race: "2019-09-22T12:10:00Z"
    },
    tz: "Asia/Singapore",
    circuit_id: "marina_bay"
  },

  'russia': {
    title: 'Formula 1 Vtb Russian Grand Prix 2019',
    times: {
        from: "2019-09-27",
        to: "2019-09-29",
        qualification: "2019-09-28T12:00:00Z",
        race: "2019-09-29T11:10:00Z"
    },
    tz: "Europe/Moscow",
    circuit_id: "sochi"
  },

  'japan': {
    title: 'Formula 1 Japanese Grand Prix 2019',
    times: {
        from: "2019-10-11",
        to: "2019-10-13",
        qualification: "2019-10-12T06:00:00Z",
        race: "2019-10-13T05:10:00Z"
    },
    tz: "Asia/Tokyo",
    circuit_id: "suzuka"
  },

  'mexico': {
    title: 'Formula 1 Gran Premio De México 2019',
    times: {
        from: "2019-10-25",
        to: "2019-10-27",
        qualification: "2019-10-26T18:00:00Z",
        race: "2019-10-27T18:10:00Z"
    },
    tz: "America/Mexico_City",
    circuit_id: "rodriguez"
  },

  'united-states': {
    title: 'Formula 1 United States Grand Prix 2019',
    times: {
        from: "2019-11-01",
        to: "2019-11-03",
        qualification: "2019-11-02T21:00:00Z",
        race: "2019-11-03T19:10:00Z"
    },
    tz: "America/Chicago",
    circuit_id: "americas"
  },

  'brazil': {
    title: 'Formula 1 Heineken Grande Prêmio Do Brasil 2019',
    times: {
        from: "2019-11-15",
        to: "2019-11-17",
        qualification: "2019-11-16T17:00:00Z",
        race: "2019-11-17T17:10:00Z"
    },
    tz: "America/Sao_Paulo",
    circuit_id: "interlagos"
  },

  'abu-dhabi': {
    title: 'Formula 1 Etihad Airways Abu Dhabi Grand Prix 2019',
    times: {
        from: "2019-11-29",
        to: "2019-12-01",
        qualification: "2019-11-30T12:00:00Z",
        race: "2019-12-01T12:10:00Z"
    },
    tz: "Asia/Dubai",
    circuit_id: "yas_marina"
  }
}

import moment from 'moment-timezone'

export function getRace (id, cb) {
  if (races[id]) {
    cb(null, races[id])
  } else {
    cb(new Error('Race not found.'))
  }
}

export function getRaces () {
  return races
}

export function nextRace () {
  let today = moment()
  let from = ''
  let race = ''
  for(race in races) {
    from = moment(races[race].times.from)
    if (today.isBefore(from)) {
      break
    }
  }
  return race
}
