import { useEffect, useState } from 'react';
import Bar from '../components/Bar';
import Line from '../components/Line';

const Home = ({ date }) => {
  // console.log('--- START VIEW ---', date);

  const [cycleData, setCycleData] = useState("");

  const [currentDay, setCurrentDay] = useState('')
  const [currentMonth, setCurrentMonth] = useState('')
  const [currentYear, setCurrentYear] = useState('')

  const [estimatedCycleDuration, setEstimatedCycleDuration] = useState('')

  const [lastCycleDay, setLastCycleDay] = useState('')
  const [lastCycleMonth, setLastCycleMonth] = useState('')
  const [lastCycleYear, setLastCycleYear] = useState('')

  const [showGraph, setShowGraph] = useState(false)
  const [topValues, setTopValues] = useState([])
  const [bottomValues, setBottomValues] = useState([])
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const [day, month, year] = date.split('/');
    setCurrentDay(day);
    setCurrentMonth(month);
    setCurrentYear(year);
  }, [date]);

  const makeCalculations = () => {
    setShowGraph(true)
    // console.log('dia ciclo ---> ', lastCycleDay);
    // console.log('mes ciclo ---> ', lastCycleMonth);
    // console.log('ano ciclo ---> ', lastCycleYear);
    const quarter = estimatedCycleDuration / 4
    const fir = quarter
    const sec = quarter * 2
    const thr = quarter * 3

    console.log('lastCycleDay', lastCycleDay);

    setTopValues([0, fir, sec, thr, estimatedCycleDuration]) // dias del ciclo
    setBottomValues([ // consider 28-29-30-31 months
      (Number(lastCycleDay)),
      (Number(lastCycleDay) + fir),
      (Number(lastCycleDay) + sec),
      (Number(lastCycleDay) + thr),
      (Number(lastCycleDay) + Number(estimatedCycleDuration))]) // dias del mes

    setPosition(40) // min: 1 max: 80 (sacar proporcion)
  }

  useEffect(() => {
    if (lastCycleDay && lastCycleMonth && lastCycleYear) {
      makeCalculations();
    }
  }, [lastCycleDay, lastCycleMonth, lastCycleYear]);


  const getDataForm = () => {
    // console.log('dia ---> ', currentDay);
    // console.log('mes ---> ', currentMonth);
    // console.log('ano ---> ', currentYear);

    const lastCycleDuration = document.getElementById("lastCycle").value;
    const lastStartDate = document.getElementById("lastDate").value;

    if (!lastCycleDuration || !lastStartDate) {
      alert('data required')
      return
    }

    setEstimatedCycleDuration(lastCycleDuration)
    const [year, month, day] = lastStartDate.split('-');

    setLastCycleDay(day)
    setLastCycleMonth(month)
    setLastCycleYear(year)

    setCycleData(`Your selection: Last Cycle ${lastCycleDuration} - Last Start Date ${lastStartDate}`);
  };

  return (
    <>
      <div className="text-center">
        <h1>MOOD-DETECTOR</h1>
      </div>
      <div className="flex-center" id="setData" style={{ alignItems: 'center' }}>
        <div id="form" className="form__body m-1 flex-center text-center">
          <label htmlFor="lastDate" className="flex-center wrap">
            <span className="mr-05">
              Last cycle duration
            </span>
            <div className="flex-column">
              <input type="text" name="lastCycle" id="lastCycle" placeholder="DD" className="input" />
            </div>
          </label>
          <label htmlFor="lastDate" className="flex-center wrap">
            <span className="mr-05">
              Last start date
            </span>
            <div className="flex-column">
              <input type="date" name="lastDate" id="lastDate" placeholder="DD-MM" className="input" />
            </div>
          </label>
        </div>
        <button onClick={getDataForm} className="button" style={{ borderRadius: '50%', padding: '1.75em 1em' }} >
          <span>
            Check
          </span>
        </button>
      </div >

      <div className="flex-center w-90 mt-1">
        <p>{cycleData}</p>
      </div>

      <div className="flex-center w-90 mt-1">
        {showGraph &&
          <Line topValues={topValues} bottomValues={bottomValues} position={position} />
        }
      </div>
    </>

  )

}

export default Home;