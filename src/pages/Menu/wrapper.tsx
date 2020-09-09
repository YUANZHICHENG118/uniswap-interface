import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function MenuWrap({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
