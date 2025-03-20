import { useEffect, useState } from "react";

const Calendar = () => {
  const totDays = 91;
  const [allDays, setAllDays] = useState([]);

  const daysOfWeek = ['Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat', 'Sun']

  useEffect(() => {
    const today = new Date();
    console.log('today', today);

    const middleIndex = Math.floor(totDays / 2);
    const days = Array.from({ length: totDays }, (_, i) => {
      const date = new Date(today);
      console.log('date', date);

      date.setDate(today.getDate() + (i - middleIndex));
      return {
        date,
        dateNumered: date.toISOString().split("T")[0],
        numberDay: i + 1,
        isToday: date.toISOString().split("T")[0] === today.toISOString().split("T")[0] ? true : false,
      };
    });

    setAllDays(days);
  }, []);

  console.log('allDays', allDays);

  const chunkArray = (array, size) => {
    const arr = Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
    console.log('arr', arr)
    return arr
  };

  return (
    <>
      <div style={{
        display: 'flex',
        width: '100%',
        fontSize: '0.8em'
      }}>
        {daysOfWeek.map((day, index) => (
          <div key={index}
            style={{
              width: '100%',
              padding: '0.25em',
              borderBottom: "1px solid gray",
              borderRight: "1px solid gray",
            }}
          >{day}</div>))
        }
      </div>
      {chunkArray(allDays, 7).map((week, weekIndex) => (
        <div key={weekIndex} style={{ display: "flex", width: '100%' }}>
          {week.map((day, index) => (
            <div key={index}
              style={{
                width: '100%',
                height: '3.6em',
                padding: '0.25em',
                borderBottom: "1px solid gray",
                borderRight: "1px solid gray",
                fontSize: '0.9em'

              }}
              className={`
                ${day.isToday ? 'bg-pink' : 'bg-gray-2'}
                ${day.dateNumered.split("-")[2] === '01' ? 'text-pink' : ''}
              `}
            >
              {day.dateNumered.split("-")[2]}
            </div>
          ))}
        </div>
      ))}
    </>
  );


};

export default Calendar;