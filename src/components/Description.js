import React, {useEffect, useState} from 'react';
import {getDescription} from '../services/api';
import '../card.css';

export const Description = ({sign , timeframe}) => {
const [global, setGlobal] = useState({});
useEffect(() => {
  getDescription(sign, timeframe).then((data) => {
    setGlobal(data);
  });
}, []);
return(
  <>
  <div>
   <h1>
  {timeframe}, horoscope for {sign} is ...{" "}
     </h1>
    {global.description ? (
      <div className="card">
         <p>
            {" "}
            <span>horoscope: </span>
            {global?.description}
           </p>

           <p>
           {" "}
           <span>compatibily: </span>
           {global?.compatibility}
             </p>
             {}
        </div>
    ) : (
      'its loading..'
    )}
    </div>

  </>
);
};