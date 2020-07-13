import styled from 'styled-components'

import { purple, white, purpleDark } from 'constants/theme'
import MEDIA from 'helpers/mediaTemplates'

import ornament from '../../../static/svg/ornaments/ornament-logo1-mob.svg'

export const Container = styled.section`

  background: linear-gradient(114.22deg, ${purpleDark} 17.04%, ${purple} 109.49%);
  border-radius: 1rem;
  box-shadow: 0px 2px 1.6rem rgba(0, 0, 0, 0.1);
  margin: 0 2rem 4rem;
  padding: 5rem 1.7rem 5rem 1.8rem;
  position: relative;
  z-index: 0;

  ${MEDIA.MIN_TABLET`
    padding: 5rem 5rem 5rem 5rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    display: flex;
    margin-left:auto;
    margin-right:auto;
    max-width: 90rem;
    padding: 5rem 5rem;
 `};
  ${MEDIA.MIN_DESKTOP_LG`
    max-width: 109rem;
  `};

  &::before, &::after {
    content:'';
    background-image: url('${ornament}');
    background-repeat: no-repeat;
    background-size: 16.3rem 17.75;
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    opacity: 0.2;
    ${MEDIA.MIN_DESKTOP_XG`
    `};
    }
  &::before {
    content:'';
    background-position: calc(0% - 10rem) calc(0% - 10rem);
    ${MEDIA.MIN_DESKTOP_SM`
      background-position: calc(0% - 5rem) calc(0% - 3rem);
    `};
  }
  &::after {
    content:'';
    background-position: calc(100% + 5rem) calc(100% + 5rem);
    ${MEDIA.MIN_DESKTOP_SM`
      background-position: calc(100%) calc(100% + 5rem);
    `};
  }
`

export const Header = styled.header`
  margin-bottom: 2rem;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  ${MEDIA.MIN_TABLET`
    justify-content: space-between;
    align-items: baseline;
  `};
`

export const TitleWrapper = styled.span`
  color: ${white};
  font-size: 2rem;
  line-height: 3.3rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 2.5rem;
  ${MEDIA.MIN_PHONE`
    font-size: 2.2rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 2.5rem;
    line-height: 3.5rem;
  `};
  ${MEDIA.MIN_TABLET`
    font-size: 3rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    line-height: 5rem;
    font-size: 3.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    line-height: 6.6rem;
    font-size: 4rem;
  `};
`

export const Text = styled.section`
  color: ${white};
  font-size: 13px;
  line-height: 2.4rem;
  margin-bottom: 3rem;
  font-weight: 600;
  padding-right: 1rem;
  ${MEDIA.MIN_PHONE`
    margin-bottom: 3.5rem;
    padding-right: 2rem;
    font-size: 1.5rem;
    line-height: 2.7rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: 4rem;
  `};
  ${MEDIA.MIN_TABLET`
    padding-right: 3rem;
    margin-bottom: 0;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    line-height: 3.8rem;
    font-size: 1.8rem;
    padding-right: 0;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    margin-bottom: 0;
    font-size: 2rem;
  `};
`

export const CTABlock = styled.div`
  display: flex;
  justify-content: center;
  ${MEDIA.MIN_TABLET`
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    margin-top: 4rem;
  `};
  ${MEDIA.MIN_DESKTOP`
    flex-direction: row;
    justify-content: center;
    margin-top: 0;
  `};
`
