import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import maxWidthContainer from 'helpers/maxWidthContainer'

import { primaryColor, primaryColorDark, white } from 'constants/theme'

import buildingUrl from '../../../static/img/build.png'

export const Container = styled.section`
  color: ${white};
  height: 72rem;
  margin-bottom: 3rem;
  overflow: hidden;
  position: relative;
  ${MEDIA.MIN_DESKTOP_MD`
    height: 77.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    height: 86.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    height: 90rem;
  `};
  &::before {
    content: '';
    background-image: linear-gradient(${primaryColor} 23%, ${primaryColorDark});
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 2.5rem),
      0 calc(100% - 15rem)
    );
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    top: 0;
    left: 0;
    ${MEDIA.MIN_DESKTOP_LG`
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5rem), 0 calc(100% - 20rem));
    `};
    ${MEDIA.MIN_DESKTOP_XG`
     clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2rem), 0 calc(100% - 28rem));
    `};
  }
`

export const HeroBody = styled.div`
  padding: 0 2rem 0;
  position: relative;
  margin-top: 10rem;
  ${MEDIA.MIN_TABLET`
    padding: 0 4rem;
    margin-top: 12rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding: 0 9rem;
    margin-top: 14rem;
 `};
  ${MEDIA.MIN_DESKTOP_MD`
    padding: 0 9.8rem;
    margin-top: 16rem;
 `};
  ${MEDIA.MIN_DESKTOP_LG`
    padding: 0 14rem;
 `};
  ${MEDIA.MIN_DESKTOP_XG`
    ${maxWidthContainer('160rem')}
  `};
  &::after {
    content: '';
    background-image: url(${buildingUrl});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 42.2rem;
    height: 27rem;
    bottom: 4rem;
    z-index: -1;
    right: -13rem;
    bottom: calc(100% - 58rem);
    filter: drop-shadow(0px 12px 20px rgba(87, 88, 110, 0.5));
    ${MEDIA.MIN_PHONE`
      right: -8rem;
      bottom: calc(100% - 58rem);
    `};
    ${MEDIA.MIN_PHONE_LG`
      right: -5rem;
      bottom: calc(100% - 60rem);
    `};
    ${MEDIA.MIN_TABLET`
      background-size: 67rem 37rem;
      width: 69rem;
      height: 39rem;
      right: -20rem;
      bottom: calc(100% - 57rem);
    `};
    ${MEDIA.MIN_DESKTOP_SM`
      background-size: 67rem 37rem;
      width: 69rem;
      height: 39rem;
      right:  -15rem;
      bottom: calc(100% - 48rem);
    `};
    ${MEDIA.MIN_DESKTOP_MD`
      background-size: 85rem 55rem;
      width: 87rem;
      height: 57rem;
      right:  -15rem;
      bottom: calc(100% - 53rem);
    `};
    ${MEDIA.MIN_DESKTOP_LG`
      right:  -15rem;
      bottom: calc(100% - 61rem);
    `};
    ${MEDIA.MIN_DESKTOP_XG`
      background-size: 103rem 66rem;
      width: 105rem;
      height: 68rem;
      right:  -20rem;
      bottom: calc(100% - 65rem);
    `};
  }
`

export const HeroTitle = styled.h2`
  line-height: 2.9rem;
  font-size: 1.9rem;
  font-weight: 900;
  margin-bottom: 3rem;
  ${MEDIA.MIN_PHONE`
    font-size: 2.2rem;
    line-height: 3.2rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 2.5rem;
    line-height: 3.5rem;
  `};
  ${MEDIA.MIN_TABLET`
    font-size: 3rem;
    line-height: 5.5rem;
  `};

  ${MEDIA.MIN_DESKTOP_SM`
    line-height: 6.6rem;
    font-size: 4rem;
    letter-spacing: 0.02em;
    padding: 0rem;
    margin-bottom: 2rem;
  `};
`

export const HeroSubtitle = styled.div`
  margin-bottom: 3rem;
  max-width: 32rem;
  /*  */
  font-size: 1.2rem;
  line-height: 2.5rem;
  ${MEDIA.MIN_PHONE`
    font-size: 1.4rem;
    line-height: 2.5rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 1.5rem;
    line-height: 3rem;
    `};
  ${MEDIA.MIN_TABLET`
      max-width: 42rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    max-width: 42rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2rem;
    line-height: 1.5;
    color: #FFFFFF;
    opacity: 0.85;
    max-width: 55rem;
  `};
`
