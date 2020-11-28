import React, { useEffect, useState } from 'react'
import Flipper from './Flipper'
import {FlipClockWrap} from '../../styled'

export default function CountDown({endDate}:{endDate:string}) {
  const [Days,setDays]=useState({days:0,daysShuffle:true});
  const [Hours,setHours]=useState({hours:0,hoursShuffle:true})
  const [Minutes,setMinutes]=useState({minutes:0,minutesShuffle:true})
  const [Seconds,setSeconds]=useState({seconds:0,secondsShuffle:true})
  useEffect(() => {

    const end = Date.parse(new Date(endDate).toString())
    let now_time = Date.parse(new Date().toString());
    const remaining = end - now_time;
    // set time units
    const days =  Math.floor((remaining / 1000 / 3600) / 24);
    const hours =  Math.floor((remaining / 1000 / 3600) % 24);
    const minutes =  Math.floor((remaining / 1000 / 60) % 60);
    const seconds =  Math.floor(remaining / 1000 % 60);
    const updateTime=()=>{
      //console.log("days===",days,Days.days)
      if (days !== Days.days) {
        const daysShuffle = !Days.daysShuffle;
        setDays({days,daysShuffle});
      }
      if (hours !== Hours.hours) {
        const hoursShuffle = !Hours.hoursShuffle;
        setHours({ hours,hoursShuffle});
      }
      if (minutes !== Minutes.minutes) {
        const minutesShuffle = !Minutes.minutesShuffle;
        setMinutes({ minutes,minutesShuffle});
      }
      if (seconds !== Seconds.seconds) {
        const secondsShuffle = !Seconds.secondsShuffle;
        setSeconds({ seconds,secondsShuffle});
      }
    }
    const timer=setInterval(()=>{
      updateTime()
    },1000)

    return () => {
      clearInterval(timer);
    };
  }, [Days,Hours,Minutes,Seconds]);




  return (
    <FlipClockWrap className="flipClock time-box">
      <div className="time-item flex-column">
        <Flipper className="flipperDay number" unit='days' digit={Days.days} shuffle={Days.daysShuffle} />
        <span className="unit text-center">天</span>
      </div>
      <div className="time-item flex-column">
        <Flipper className="flipperHour number" unit='hours' digit={Hours.hours} shuffle={Hours.hoursShuffle}/>
        <span className="unit text-center">小时</span>
      </div>
      <div className="time-item flex-column">
        <Flipper className="flipperMinute number" unit='minutes' digit={Minutes.minutes} shuffle={Minutes.minutesShuffle}/>
        <span className="unit text-center">分</span>
      </div>
      <div className="time-item flex-column">
        <Flipper className="flipperSecond number" unit='seconds' digit={Seconds.seconds} shuffle={Seconds.secondsShuffle}/>
        <span className="unit text-center">秒</span>
      </div>
    </FlipClockWrap>
  )
}
