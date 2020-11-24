import React from 'react'
import useCopyClipboard from '../../../hooks/useCopyClipboard'
import { useTranslation } from 'react-i18next'

export default function CopyBtn({ copyData, title }: { copyData: string; title?: string }) {
  const { t } = useTranslation()
  const [isCopied, setCopied] = useCopyClipboard()
  const copy = (val: string) => {
    setCopied(val)
  }
  return (
    <a
      href="javascript:void(0)"
      onClick={() => copy(copyData)}
      className="btn btn-default btn-radius withdraw  pool-width btn-copy"
    >
      {isCopied ? 'Copy Sucess' : title ? title : t('index17')}
    </a>
  )
}
