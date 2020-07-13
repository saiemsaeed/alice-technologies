import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import maxWidthContainer from 'helpers/maxWidthContainer'
import { deepPurple, white } from 'constants/theme'

import ornament1 from '../../../static/svg/ornament2-bg.svg'
import ornament2 from '../../../static/svg/ornaments/ornament-logo2-mob.svg'

export const Container = styled.section`
  background-color: ${deepPurple};
  position: relative;
  padding-bottom: 4.5rem;
  overflow: hidden;
  clip-path: polygon(0 0, 100% calc(0% + 11rem), 100% 100%, 0 100%);
  padding-top: 15rem;
  ${MEDIA.MIN_DESKTOP_SM`
    padding-top: 25rem;
  `};

  &::before {
    content:'';
    background-image: url('${ornament1}');
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    left: -7rem;
    top: 4rem;
    position: absolute;
    width: 24rem;
    z-index: 0;
    opacity: 0.6;
    ${MEDIA.MIN_DESKTOP_SM`
      background-size: 44rem 44rem;
      height: 44rem;
      width: 44rem;
      left: -10rem;
    `};
  }
  &::after {
    content:'';
    background-image: url('${ornament2}');
    background-repeat: no-repeat;
    background-size: cover;
    height: 16.28rem;
    width: 17.75rem;
    right: -3rem;
    bottom: 9rem;
    position: absolute;
    opacity: 0.7;
    z-index: -1;
    ${MEDIA.MIN_DESKTOP_SM`
      height: 44rem;
      width: 44rem;
      right: -15rem;
      bottom: 3rem;
    `};
  }
`

export const Header = styled.header`
  padding: 0 2rem;
  text-align: center;
  ${MEDIA.MIN_DESKTOP_XG`
    ${maxWidthContainer('160rem')}
  `};
`

export const BlockWrapper = styled.div`
  padding: 0 2rem;
`

export const Paragraph = styled.p`
  color: ${white};
  line-height: 2.7rem;
  font-size: 1.5rem;
  margin-bottom: 4rem;
  ${MEDIA.MIN_DESKTOP_LG`
    line-height: 1.5;
    font-size: 2rem;
    letter-spacing: 0.01em;
  `};
`

export const ParagraphMain = styled.p`
  color: ${white};
  line-height: 2.7rem;
  font-size: 1.5rem;
  margin-bottom: 4rem;
  ${MEDIA.MIN_TABLET`
    max-width: 62rem;
    text-align: center;
    margin: 0 auto 4rem auto;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    max-width: 67rem;
    font-size: 1.5rem;
    line-height: 2.7rem;
    letter-spacing: 0.01em;
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    max-width: 65rem;
    margin: 0 auto;
    margin-bottom: 7.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    max-width: 88.6rem;
    font-size: 2rem;
    line-height: 1.5;
  `};
`

export const Subtitle = styled.h3`
  color: ${white};
  display: flex;
  align-items: center;
  line-height: 1.5;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
`

export const SubtitleText = styled.span`
  margin-left: 1.76rem;
`

export const GraphFooterBlock = styled.div`
  ${MEDIA.MIN_TABLET`
    display: flex;
    margin-top: 6.5rem;
    padding-left: 2rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    display: flex;
    padding-left: 8rem;
    padding-right: 8rem;
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    padding-left: 10rem;
    padding-right: 10rem;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    max-width: 160rem;
    margin: 6.5rem auto 0;
    padding-left: 14rem;
    padding-right: 14rem;
  `};
`

export const Footer = styled.footer`
  padding: 0 3rem 0 2rem;
  ${MEDIA.MIN_TABLET`
    margin-right: 0rem;
    max-width: 37rem;
    padding-left: 0;
    order: 1;
    align-self: center;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    align-self: center;
    padding-left: 0;
    order: 1;
    margin-right: 5rem;
    max-width: 48rem;
  `};
`
