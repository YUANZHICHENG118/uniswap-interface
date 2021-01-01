import React from 'react'

export default function ({top,bottom}:{top:number,bottom:number}) {
  return (
    <div className='item flex-column align-items-center'>
      <span className='top'><b className='themeColor'>{top}</b><span className='unit'>%</span></span>
      <span className='bg-white line'></span>
      <span className='bottom'> <b className='themeColor'>{bottom}</b><span className='unit'>USDT</span></span>
    </div>
  )

}
