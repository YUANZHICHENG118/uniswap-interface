// 白色箭头的标题
import React from 'react'

import ArrowWhite from '../../../assets/images/subscription/arrow-white.png'

export default function InviteModule({ title }: { title: string }) {
  return <div className='white-title'><img src={ArrowWhite} alt=""/> {title}</div>
}
