import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { deepPurpleDark, white } from 'constants/theme'

const selectedStyle = ({ selected }) => {
  if (!selected) {
    return ''
  }

  return `
    background-color: ${deepPurpleDark};
    font-weight: 700;
  `
}

export const Container = styled.button`
  align-items: flex-start;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  color: ${white};
  display: flex;
  font-size: 18px;
  height: 9.6rem;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-right: 2rem;
  outline: none;
  padding: 2rem 1.6rem;
  width: 30rem;
  cursor: pointer;
  transition: all 0.3s;
  ${selectedStyle}

  ${MEDIA.MIN_TABLET`
    font-size: 15px;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    height: 10.6rem;
    width: 28rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    height: 10.6rem;
    width: 28rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 18px;
    height: 10.6rem;
    width: 30.5rem;
  `};
`

export const Bullet = styled.div`
  border-radius: 100rem;
  margin-right: 1.2rem;
  margin-top: 0.5rem;
  height: 1.5rem;
  opacity: 0.6;
  width: 1.5rem;
  background: ${({ color }) => color};
  border: 2px solid ${({ selected }) => (selected ? white : 'transparent')};
`

export const Text = styled.div`
  flex: 1;
  ${MEDIA.MIN_TABLET`
  `};
`
