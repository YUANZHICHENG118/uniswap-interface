import React, { useState,useMemo } from 'react'

export default function Flipper({ unit, className,digit,shuffle, ...rest }: { unit?: string; className?: string,digit:number,shuffle?:any }) {
  const [isFlipping] = useState(false)
  const [flipType] = useState('down')
  // add zero
  const now = useMemo(()=>{
    return digit<10 ? '0'+digit: digit
  },[digit]);

  const before = useMemo(()=>{
    if (unit !== "hours") {
      return digit === 0 ? 59 : (digit);
    } else {
      return digit === 0 ? 23 : (digit);
    }
  },[digit]);


// add before zero
  const beforeText=useMemo(()=>{
    return before<10?'0'+before: before
  },[before])

// shuffle digits
  const digit1=useMemo(()=>{
    return shuffle ? beforeText : now
  },[shuffle])

  const digit2=useMemo(()=>{
    return !shuffle ? beforeText : now
  },[shuffle])

//
  const animation1=useMemo(()=>{
    return shuffle ?  "fold" : "unfold"
  },[shuffle])

  const animation2=useMemo(()=>{
    return !shuffle ? "fold" : "unfold"
  },[shuffle])

  return (
    <div {...rest} className={['flipUnitContainer number', flipType, isFlipping ? 'go' : null].join(' ')}>
      <div className="upperCard">
        <span>{beforeText}</span>
      </div>
      <div className="lowerCard">
        <span>{now}</span>
      </div>
      <div className={`flipCard first ${animation1}`}>
        <span>{digit2}</span>
      </div>
      <div className={`flipCard second  ${animation2}`}>
        <span>{digit1}</span>
      </div>
    </div>
  )
}
