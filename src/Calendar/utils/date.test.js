import { getDates } from './date'

const expectResult202208 = [
  {
    "title": 31,
    "isNonCurrentMonth": true,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 1,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 2,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 3,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 4,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 5,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 6,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 7,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 8,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 9,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 10,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 11,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 12,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 13,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 14,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 15,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 16,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 17,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 18,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 19,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 20,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 21,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 22,
    "isNonCurrentMonth": false,
    "isToday": true,
    "isActive": false
  },
  {
    "title": 23,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 24,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 25,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 26,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 27,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 28,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 29,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 30,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 31,
    "isNonCurrentMonth": false,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 1,
    "isNonCurrentMonth": true,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 2,
    "isNonCurrentMonth": true,
    "isToday": false,
    "isActive": false
  },
  {
    "title": 3,
    "isNonCurrentMonth": true,
    "isToday": false,
    "isActive": false
  }
]

describe('Test getDates function', () => {
  const RealDate = Date

  Date = class extends RealDate {
    constructor(...args) {
      if (args.length === 0) return new RealDate(2022, 7, 22)
      return new RealDate(...args)
    }
  }

  afterEach(() => {
    Date = RealDate
  })

  it('render 2022/8/22', () => {
    expect(getDates(2022, 7)).toEqual(expectResult202208)
  })
});
