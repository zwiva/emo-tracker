import { useState, useEffect } from "react";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState("");

  // **** navbar ****
  const [today, setToday] = useState("");
  const [now, setNow] = useState("");

  useEffect(() => {
    console.log('date', date);
    setToday(date.toLocaleDateString("es-ES"));
    setNow(date.toLocaleTimeString("es-ES"));
  }, []);

  // **** form ****
  const setDataForm = () => {
    const lastCycle = document.getElementById("lastCycle").value;
    console.log("lastCycle --->", lastCycle);
    const lastStartDate = document.getElementById("lastDate").value;
    console.log("lastStartDate --->", lastStartDate);

    setData(`Last Cycle: ${lastCycle}, Last Start Date: ${lastStartDate}`);
  };

  return (
    <>
      <div className="text-center">
        <h1>EMO-TRACKER</h1>
      </div>

      <div className="flex-center flex-column text-pink">
        <p>Today: {today}</p>
        <p>Now: {now} </p>
      </div>

      <div className="flex-center" id="setData">
        <div id="form" className="form__body">

          <label htmlFor="lastDate" className="flex-between wrap">
            <span className="mr-025">
              Last cycle duration
            </span>
            <div className="flex-column">
              <input type="text" name="lastCycle" id="lastCycle" placeholder="DD" />
              <span> (range: ex: 25)</span>
            </div>
          </label>

          <label htmlFor="lastDate" className="flex-between wrap">
            <span>
              Last start date
            </span>
            <div className="flex-column">
              <input type="date" name="lastDate" id="lastDate" placeholder="DD-MM" />
            </div>
          </label>

          <button onClick={setDataForm} className="button">Check</button>
        </div>
      </div>

      <div id="showData" className="flex-center w-90 mt-1">
        <p>{data}</p>
      </div>
    </>

  )

}

export default Home;