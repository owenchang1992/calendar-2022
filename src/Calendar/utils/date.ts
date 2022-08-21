export type DateType = {
  title: number;
  isNonCurrentMonth: boolean;
  isToday: boolean;
  isActive: boolean;
};

const defaultDate = {
  title: 0,
  isNonCurrentMonth: false,
  isToday: false,
  isActive: false,
} as DateType;


// generate read only infomation 
export const getDates = (year: number, month: number) => {
  // calculate days in current mouth
  const datesInMonth = 32 - new Date(year, month, 32).getDate();

  // calculate the the first day of the first week of the current month
  const firstDay = new Date(year, month).getDay();

  // calculate the title of the first day of the first week
  const firstDayOfList = new Date(year, month, - firstDay).getDate() + 1;

  // calculate the index of the last day of current month
  const lastDayIndex = datesInMonth + firstDay - 1;
  const newDates = [] as typeof defaultDate[];

  const isToday = (year: number, month: number) => (date: number) => {
    const today = new Date();
    if (
      date === today.getDate()
      && year === today.getFullYear()
      && month === today.getMonth()
    ) return { isToday: true };
    return null
  }

  const addDates = (
    dates: typeof defaultDate[],
    beginDate: number,
    length: number,
    tags?: Partial<typeof defaultDate> | ((date: number) => Partial<typeof defaultDate> | null),
  ) => {
    for (let i = beginDate; i < beginDate + length; i++) {
      dates.push({
        ...defaultDate,
        title: i,
        ...(typeof tags === 'function' ? tags(i) : tags),
      });
    }

    return dates;
  };

  // add days of previous month to newDays
  addDates(newDates, firstDayOfList, firstDay, { isNonCurrentMonth: true });

  // add days of current month to newDays
  addDates(newDates, 1, datesInMonth, isToday(year, month));

  // add days of next month to newDays
  addDates(
    newDates,
    1,
    (41 - lastDayIndex) % 7, // to avoid unnecessary line
    { isNonCurrentMonth: true }
  );

  return newDates;
};