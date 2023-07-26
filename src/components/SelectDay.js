import React from 'react'
import '../button.css'

export const SelectDay = ({onTimeframeSelected}) => {
return (
  <div>
   <h2>select <span className="sign">Timeframe</span> </h2>
   <div className="grid">
    {['yesterday', 'today', 'tomorrow'].map((timeframe) => (
      <button 
        className="button-56"
        key={timeframe}
        onClick={ () => onTimeframeSelected(timeframe) }
      > {timeframe}</button>

    ))}

     </div>
    </div>
)
}