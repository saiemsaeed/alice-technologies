import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { grey, greyDark, white } from 'constants/theme'

const selectedStyle = ({ selected }) => {
  if (selected) {
    return `
      box-shadow: none;
      border: 1px solid rgba(93, 108, 124, 0.3);
      border-radius: 10px;
      margin-bottom: 2.5rem;
    `
  } else {
    return `
      box-shadow: 0px 5px 54px rgba(0, 0, 0, 0.15);
      cursor: pointer;
    `
  }
}

export const Container = styled.div`
  background: ${white};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  ${selectedStyle}
  ${MEDIA.MIN_PHONE`
    padding: 2rem 2rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    width: 50.2rem;
    height: 13.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    width: 60.2rem;
    height: 13.5rem;
  `};
`

export const Bullet = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100rem;
  background: ${({ color }) => color};
  ${MEDIA.MIN_PHONE`
    width: 2.5rem;
    height: 2.5rem;
  `};
  ${MEDIA.MIN_TABLET`
    margin-left: 0.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    width: 4rem;
    height: 4rem;
  `};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

export const Outdated = styled.div`
  background-color: #e8c345;
  border-radius: 2px;
  color: ${grey};
  font-weight: 600;
  margin-left: 2rem;
  padding: 0.5rem 1rem;
`

export const Title = styled.h4`
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: ${({ selected }) => (selected ? '400' : '600')};
  color: ${({ selected }) => (selected ? grey : greyDark)};
  ${MEDIA.MIN_PHONE`
    line-height: 2.7rem;
    font-size: 1.5rem;
    letter-spacing: 0.01em;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    line-height: 1.5;
    font-size: 2rem;
    letter-spacing: 0.01rem;
  `};
`

export const Amounts = styled.div`
  display: flex;
`

export const Amount = styled.p`
  line-height: 2rem;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${grey};
  &:not(:last-child) {
    margin-right: 4rem;
  }
  ${MEDIA.MIN_PHONE`
    line-height: 21px;
    font-size: 12px;
    letter-spacing: 0.06em;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    line-height: normal;
    font-size: 1.5rem;
  `};
`
