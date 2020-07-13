import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import { deepPurpleDark, greyLight, greenLight } from 'constants/theme'

const cardStyle = ({ explainStyle }) => {
  if (explainStyle === 1) {
    return `
      justify-content: space-between;
    `
  }

  if (explainStyle === 2) {
    return `
      justify-content: space-between;
    `
  }

  if (explainStyle === 3) {
    return `
      justify-content: space-evenly;
    `
  }

  if (explainStyle === 5) {
    return `
      justify-content: space-evenly;
    `
  }

  return ''
}

const setStyle = ({ explainStyle, index }) => {
  if (explainStyle === 1) {
    if (index === 0) {
      return `
        font-size: 1.3rem;
        color: ${greenLight};
        font-weight: 600;
      `
    }
    return `
      font-size: 1.3rem;
    `
  }

  if (explainStyle === 2 || explainStyle === 4) {
    if (index === 0 || index === 2) {
      return `
        color: ${greenLight};
        font-weight: 600;
        font-size: 1.5rem;
        text-align:center
        ${MEDIA.MIN_DESKTOP_XG`
          font-size: 2rem;
        `};
      `
    }
    return `
      text-align:center;
      margin-bottom: ${index === 1 ? '1.2rem' : '0rem'}
    `
  }

  if (explainStyle === 3) {
    if (index === 1 || index === 2) {
      return `
        color: ${greenLight};
        font-weight: 600;
      `
    }
  }

  if (explainStyle === 5 || explainStyle === 6) {
    if (index === 0 || index === 1) {
      return `
        color: ${greenLight};
        font-weight: 600;
      `
    }
  }

  return ''
}

const positionDesk = ({ explainStyle }) => {
  if (explainStyle === 1) {
    return `
      top: 8rem;
      right: 4rem;
    `
  }

  if (explainStyle === 2) {
    return `
      top: 2rem;
      right: 10rem;
    `
  }

  if (explainStyle === 3) {
    return `
      top: 12rem;
      right: 10rem;
    `
  }

  if (explainStyle === 4) {
    return `
      top: 0rem;
      left: 3rem;
    `
  }

  if (explainStyle === 5) {
    return `
      height: 8rem;
      top: 9.5rem;
      left: 3rem;
    `
  }

  if (explainStyle === 6) {
    return `
      height: 8rem;
      top: 11rem;
      left: 12rem;
    `
  }
}

const positionDeskLg = ({ explainStyle }) => {
  if (explainStyle === 1) {
    return `
      top: 11rem;
    `
  }
  if (explainStyle === 2) {
    return `
      top: 12rem;
      right: 18rem;
    `
  }

  if (explainStyle === 3) {
    return `
      top: 23rem;
      right: 18rem;
    `
  }

  if (explainStyle === 4) {
    return `
      top: 8rem;
      left: 11rem;
    `
  }

  if (explainStyle === 5) {
    return `
      top: 18rem;
      left: 11rem;
    `
  }

  if (explainStyle === 6) {
    return `
      top: 18rem;
      left: 18rem;
    `
  }
}

const positionDeskXg = ({ explainStyle }) => {
  if (explainStyle === 1) {
    return `
      top: 13rem;
    `
  }
  if (explainStyle === 2) {
    return `
      top: 16rem;
      right: 22rem;
    `
  }

  if (explainStyle === 3) {
    return `
      top: 100rem;
      right: 22rem;
    `
  }

  if (explainStyle === 4) {
    return `
      top: 10rem;
      left: 13rem;
    `
  }

  if (explainStyle === 5) {
    return `
      top: 21rem;
      left: 13rem;
    `
  }

  if (explainStyle === 6) {
    return `
      top: 24rem;
      left: 23rem;
    `
  }
}

export const Container = styled.section`
  background: ${deepPurpleDark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 700;
  width: 15rem;
  height: 13.8rem;
  padding: 2.5rem 1rem;
  ${cardStyle}

  ${MEDIA.MIN_PHONE`
    width: 16rem;
  `};

  ${MEDIA.MIN_DESKTOP_SM`
    width: 20.6rem;
    height: 9rem;
    padding: 1rem;
    position: absolute;
    ${positionDesk}
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    ${positionDeskLg}
  `}
  ${MEDIA.MIN_DESKTOP_XG`
    ${positionDeskXg}
  `}
`

export const TextPrimary = styled.p`
  line-height: 2.7rem;
  font-size: 1.5rem;
  color: ${greenLight};
`

export const TextSecondary = styled.p`
  line-height: 2.2rem;
  font-size: 1.2rem;
  color: ${greyLight};
`

export const Text = styled.p`
  text-align: left;
  color: ${greyLight};
  font-size: 1.2rem;
  font-weight: 400;

  ${setStyle}
`
