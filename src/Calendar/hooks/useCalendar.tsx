import { useState, useMemo } from 'react'
import { getDates, DateType } from '../utils/date';

type SelectDateType = {
  beginDate: {
    year: number,
    month: number,
    date: number,
  } | null,
  endDate?: {
    year: number,
    month: number,
    date: number,
  } | null
}

export default function useCalendar(
  year?: number | undefined,
  month?: number | undefined,
) {
  const [ calendar, setCalendar ] = useState({
    year: year || new Date().getFullYear(),
    month: month || new Date().getMonth(),
    dates: getDates(year || new Date().getFullYear(), month || new Date().getMonth()),
  });

  const [selectedDate, setSelectDate] = useState<SelectDateType>({ beginDate: null, endDate: null });

  const monthForward = () => {
    setCalendar((previousState) => {
      const { year, month } = previousState;

      if (month === 11) {
        return {
          year: year + 1,
          month: 0,
          dates: getDates(year + 1, 0)
        }
      }

      return {
        ...previousState,
        month: month + 1,
        dates: getDates(year, month + 1)
      }
    })
  }

  const monthBackward = () => {
    setCalendar((previousState) => {
      const { year, month } = previousState;

      if (month === 0) {
        return {
          year: year - 1,
          month: 11,
          dates: getDates(year - 1, 11)
        }
      }

      return {
        ...previousState,
        month: month - 1,
        dates: getDates(year, month - 1)
      }
    })
  }

  const tagSelectedDate = (date: DateType) => {
    const { year, month } = calendar

    if (!selectedDate.beginDate) return date;

    const beginDate = new Date(
      selectedDate.beginDate.year,
      selectedDate.beginDate.month,
      selectedDate.beginDate.date,
    )

    const endDate = selectedDate.endDate ? new Date(
      selectedDate.endDate.year,
      selectedDate.endDate.month,
      selectedDate.endDate.date,
    ) : null

    const currentDate = new Date(year, month, date.title)

    if (endDate) {
      if (currentDate >= beginDate && currentDate <= endDate) return { ...date, isActive: true }
    } else if (currentDate === beginDate){
      return { ...date, isActive: true }
    }

    return date
  }

  const selectDate = (date: DateType) => {
    const {year, month} = calendar
    if (date.isNonCurrentMonth) return

    if (!selectedDate.beginDate) {
      return setSelectDate({
        beginDate: {
          year,
          month,
          date: date.title,
        },
        endDate: null,
      });
    }

    const isBeforeSelectedDate = new Date(year, month, date.title) < new Date(
      selectedDate.beginDate.year,
      selectedDate.beginDate.month,
      selectedDate.beginDate.date,
    )

    if (isBeforeSelectedDate) {
      return setSelectDate({
        beginDate: null,
        endDate: null,
      });
    }

    return setSelectDate({
      ...selectedDate,
      endDate: {
        year,
        month: month,
        date: date.title,
      },
    });
  }

  const newCalendar = useMemo(() => {
    return {
      ...calendar,
      dates: calendar.dates.map(tagSelectedDate)
    }
  }, [calendar, tagSelectedDate, selectedDate])

  return [newCalendar, monthForward, monthBackward, selectDate] as const
}
