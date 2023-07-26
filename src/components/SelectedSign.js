import React from 'react';

export const SelectedSign = ({onSignSelected}) => {
  return(
    <div>
     <h2>
       {" "}
       select you  <span className='sign'>sign</span>{" "}
       </h2>
       <div className="grid">
         {[
           "aries",
           "taurus",
           "gemini",
           "leo",
           "virgo",
           "libra",
           "scorpio",
           "sagittarius",
           "capricorn",
           "aquarius",
           "pisces",
         ].map((sign) => (
           <button 
             className="button-56"
             key={sign}
             value={sign}
             onClick={() => onSignSelected(sign)}
           > {sign}
             </button>
         ))}
         </div>
      </div>
  )
}