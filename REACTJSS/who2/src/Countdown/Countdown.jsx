import React from 'react'
// import Parent from './Parent'
// import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { ReactCountryFlag } from "react-country-flag"
const Countdown = () => {
  return (
    // !timer
    // <div>//<Countdown date={Date.now() + 10000}>
    // //   <Parent/>
    // //   </Countdown>
    //   </div>
    // .......................

    // !circle
  //   <div>
  //     <CountdownCircleTimer>
  //   isPlaying
  //   duration={7}
  //   colors={['#004777', '#F7B801', '#A30000', '#A30000']}
  //   colorsTime={[7, 5, 2, 0]}
  
  //   {({ remainingTime }) => remainingTime}
  // </CountdownCircleTimer>
  //   </div>

  <div>
            <ReactCountryFlag countryCode="IN" />

            <ReactCountryFlag
                className="emojiFlag"
                countryCode="IN"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="India"
            />

            <ReactCountryFlag countryCode="IN" svg />

            <ReactCountryFlag
                countryCode="IN"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="IN"
            />

            <ReactCountryFlag
                countryCode="IN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="IN"
            />
        </div>
  )
}

export default Countdown