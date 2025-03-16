import { useState } from 'react';

const Home = ({ today, now }) => {
  console.log('today', today);
  console.log('now', now);

  const [data, setData] = useState("");

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
        <button onClick={setDataForm} className="button" style={{ borderRadius: '50%', padding: '1.75em 1em' }} >
          <span>
            Check
          </span>
        </button>
      </div >

      <div id="showData" className="flex-center w-90 mt-1">
        <p>{data}</p>
      </div>
    </>

  )

}

export default Home;