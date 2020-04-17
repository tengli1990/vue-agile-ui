import range from './range'

const START_YEAR = 2000
const END_YEAR = 2050

const UNIT_YEAR = '年'
const UNIT_MONTH = '月'
const UNIT_DAY = '日'

function isLeapYear (y) {
  return (y % 4 === 0) && (y % 100 !== 0 || y % 400 === 0)
};

function getDays (y, m) {
  y = Number(y)
  m = Number(m)
  let endDay = null
  switch (m) {
    case 2:
      endDay = isLeapYear(y) ? 29 : 28; break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      endDay = 31; break
    case 4:
    case 6:
    case 9:
    case 11:
    default:
      endDay = 30; break
  }
  const days = range(1, endDay, true, UNIT_DAY)
  return days.map((day) => {
    return {
      value: day.match(/\d*/g)[0],
      name: day
    }
  })
};

const yearData = range(START_YEAR, END_YEAR, false, UNIT_YEAR)
const monthData = range(1, 12, true, UNIT_MONTH)

const cascadeMonthData = monthData.map((month) => {
  return {
    value: month.match(/\d*/g)[0],
    name: month,
    children: []
  }
})

const dateData = []
yearData.map((year) => {
  const item = {
    value: year.match(/\d*/g)[0],
    name: year,
    children: cascadeMonthData.slice()
  }
  item.children.forEach((month) => {
    month.children = getDays(year.slice(), month.value.slice())
  })

  dateData.push(JSON.parse(JSON.stringify(item)))
})

const date = new Date()
const dateAnchor = [
  { value: `${date.getFullYear()}${UNIT_YEAR}` },
  { value: `${date.getMonth() + 1}${UNIT_MONTH}` },
  { value: `${date.getDate()}${UNIT_DAY}` }
]

export {
  dateAnchor,
  dateData
}
