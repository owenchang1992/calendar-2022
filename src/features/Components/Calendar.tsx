import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import './Calendar.css'
import useCalendar from '../hooks/useCalendar'

const Calendar = () => {
  const [
    calendar,
    monthForward,
    monthBackward,
    selectDate,
  ] = useCalendar();

  const getBackgroundColor = (date: { title: number; isNonCurrentMonth: boolean; isToday: boolean; isActive: boolean; }) => {
    if (date.isNonCurrentMonth) return 'non-current-month' 
    if (date.isActive) return 'active' 
    if (date.isToday) return 'today'
    return ''
  }

  return (
    <div className='calendar-container'>
      <div className="calendar-header">
        <div className='v-h-center icons' onClick={monthBackward}>
          <BiChevronLeft />
        </div>  
        <div className='calendar-month v-h-center'>
          {`${calendar.year}年${calendar.month + 1}月`}
        </div>
        <div className='v-h-center icons' onClick={monthForward}>
          <BiChevronRight />
        </div>
      </div>
      <div className="calendar-dates">
        {
          calendar.dates.map((date) => (
            <div
              className={`date v-h-center ${getBackgroundColor(date)}`}
              onClick={() => selectDate(date)}
              key={`${date.isNonCurrentMonth ? calendar.month : 'isNonCurrentMonth'}-${date.title}`}
            >
              {`${date.title}日`}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Calendar

