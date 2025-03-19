import { useCallback, useEffect, useState } from 'react';
import Bar from '../components/Bar';
import Line from '../components/Line';
import { useTranslation } from 'react-i18next';

const Home = ({ today, todayFull }) => {
  // console.log('--- START VIEW ---', todayFull);
  const { t, i18n } = useTranslation();
  // const [cycleData, setCycleData] = useState("");

  const [currentDay, setCurrentDay] = useState('')
  // const [currentMonth, setCurrentMonth] = useState('')
  // const [currentYear, setCurrentYear] = useState('')

  const [estimatedCycleDuration, setEstimatedCycleDuration] = useState(0)
  const [startDate, setStartDate] = useState("")

  const [lastCycleDay, setLastCycleDay] = useState('')
  const [lastCycleMonth, setLastCycleMonth] = useState('')
  const [lastCycleYear, setLastCycleYear] = useState('')

  const [showGraph, setShowGraph] = useState(false)

  const [quarter, setQuarter] = useState('');
  const [topValues, setTopValues] = useState([])
  const [bottomValues, setBottomValues] = useState([])
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const [day, month, year] = today.split('/');
    setCurrentDay(day);
    // setCurrentMonth(month);
    // setCurrentYear(year);
  }, [today]);

  const drawTopSection = () => {
    const quarter = estimatedCycleDuration / 4;
    setQuarter(quarter);
    const frs = quarter;
    const sec = quarter * 2;
    const thr = quarter * 3;
    setTopValues([0, frs, sec, thr, Number(estimatedCycleDuration)]); // dias del ciclo
    return quarter;
  }

  const drawBottomSection = (quarter) => {
    const allfirstQ = new Date(startDate);
    allfirstQ.setDate(allfirstQ.getDate() + quarter);
    const firstQ = allfirstQ.toISOString().split("T")[0];
    // console.log('firstQ', firstQ);

    const allSecondQ = new Date(startDate);
    allSecondQ.setDate(allSecondQ.getDate() + (quarter * 2));
    const secondQ = allSecondQ.toISOString().split("T")[0];
    // console.log('secondQ', secondQ);

    const allThirdQ = new Date(startDate);
    allThirdQ.setDate(allThirdQ.getDate() + (quarter * 3));
    const thirdQ = allThirdQ.toISOString().split("T")[0];
    // console.log('thirdQ', thirdQ);

    const allFourthQ = new Date(startDate);
    allFourthQ.setDate(allFourthQ.getDate() + (quarter * 4));
    const fourthQ = allFourthQ.toISOString().split("T")[0];
    // console.log('fourthQ', fourthQ);

    const bottomValues = [
      (`${startDate.split('T')[0].split('-')[2]}.${startDate.split('T')[0].split('-')[1]}`),
      (`${firstQ.split('-')[2]}.${firstQ.split('-')[1]}`),
      (`${secondQ.split('-')[2]}.${secondQ.split('-')[1]}`),
      (`${thirdQ.split('-')[2]}.${thirdQ.split('-')[1]}`),
      (`${fourthQ.split('-')[2]}.${fourthQ.split('-')[1]}`)
    ]
    // console.log('bottomValues', bottomValues);
    setBottomValues(bottomValues)
  }

  const drawToday = () => {
    console.log('----------------hoy---------------');
    console.log('startDate', startDate);

    const pos = lastCycleDay
    const posFinal = lastCycleDay + 10

    setPosition(posFinal) // min: 1 max: 80 (sacar proporcion)
  }

  // const drawGraph = () => {
  //   const quarter = drawTopSection()
  //   drawBottomSection(quarter)
  //   drawToday()
  //   setShowGraph(true)
  // }

  const drawGraph = useCallback(() => {
    const quarter = drawTopSection();
    drawBottomSection(quarter);
    drawToday();
    setShowGraph(true);
  }, [drawTopSection, drawBottomSection, drawToday]);

  useEffect(() => {
    if (lastCycleDay && lastCycleMonth && lastCycleYear) {
      drawGraph();
    }
  }, [lastCycleDay, lastCycleMonth, lastCycleYear]);

  const getDataForm = () => {
    const lastCycleDuration = document.getElementById("lastCycle").value;
    const lastStartDate = document.getElementById("lastDate").value;

    if (!lastCycleDuration || !lastStartDate) {
      alert(`${t("missingData")}`)
      return
    }

    const lastPeriod = new Date(lastStartDate);
    const lastPeriodISO = lastPeriod.toISOString().split("T")[0] + "T00:00:00";

    setEstimatedCycleDuration(lastCycleDuration)
    setStartDate(lastPeriodISO)

    const [year, month, day] = lastStartDate.split('-');
    setLastCycleDay(day)
    setLastCycleMonth(month)
    setLastCycleYear(year)
  };

  return (
    <>
      <div className="text-center">
        <h1>Woman <span className='text-pink'>Mood</span> Detector</h1>
      </div>
      <div className="flex-center" id="setData" style={{ alignItems: 'center' }}>
        <div id="form" className="form__body m-1 flex-center text-center">
          <label htmlFor="lastDate" className="flex-center wrap">
            <span className="mr-05">
              {t("lastCycleDuration")}
            </span>
            <div className="flex column">
              <input type="number" name="lastCycle" id="lastCycle" placeholder="DD" className="input" />
            </div>
          </label>
          <label htmlFor="lastDate" className="flex-center wrap">
            <span className="mr-05">
              {t("lastStartDate")}
            </span>
            <div className="flex column">
              <input type="date" name="lastDate" id="lastDate" placeholder="DD-MM" className="input" />
            </div>
          </label>
        </div>
        <button onClick={getDataForm} className="button" style={{ borderRadius: '50%', padding: '2em 1.25em' }} >
          <span>
            <p>{t("check")}</p>
          </span>
        </button>
      </div>

      <div className="flex-center w-90">
        {showGraph &&
          <p>{t("msgFirstPart")} 
            <span className='mx-05 text-pink' style={{ fontWeight: 'bold' }}>
               {quarter} 
            </span> 
            {t("msgSecondPart")}.</p>
        }
      </div>

      <div className="flex-center w-90">
        {showGraph &&
          <Line topValues={topValues} bottomValues={bottomValues} position={position} />
        }
      </div>
    </>

  )

}

export default Home;