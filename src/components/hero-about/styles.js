import styled from 'styled-components'
import MEDIA from '../../helpers/mediaTemplates'
import { primaryColor } from 'constants/theme'
import BREAKPOINTS from 'constants/breakpoints'

const maxWidthApp = `${BREAKPOINTS.DESKTOP_XG / 10}rem;`

export const HeroTitle = styled.h1`
  font-size: 5.8rem;
  font-weight: 900;
  line-height: 1.4;
  color: ${primaryColor};
  margin-top: 8rem;
  text-align: center;

  ${MEDIA.DESKTOP_XG`
    margin-top: 5rem;
    font-size: 4.8rem;
  `};

  ${MEDIA.DESKTOP_MD`
    margin-top: 5rem;
    font-size: 3.6rem;
  `};
  ${MEDIA.DESKTOP`
    margin-top: 5rem;
    font-size: 3.4rem;
  `};
  ${MEDIA.TABLET`
    margin-top: 7rem;
    font-size: 3.2rem;
  `};
`

export const Spacer3 = styled.div`
  height: 4rem;

  ${MEDIA.TABLET`
    display: ${({ xs }) => (xs === false ? 'none' : 'block')};
  `}
`

export const Container = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  ${MEDIA.MIN_TABLET`
    padding: 2rem 2rem;
 `};
  ${MEDIA.MIN_DESKTOP_SM`
    z-index: 0;
    padding: 5.5rem 6rem 0;
 `};
  ${MEDIA.MIN_DESKTOP_XG`
    max-width: ${maxWidthApp};
    margin: 0 auto;
    transform
 `};
`

export const P = styled.p`
  color: ${primaryColor};
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 400;
  text-align: left;

  ${MEDIA.MIN_PHONE`
    font-size: 1.4rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 1.75rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    font-size: 1.6rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2.25rem;
  `};
`
