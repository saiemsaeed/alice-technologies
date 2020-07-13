import styled from 'styled-components'
import { grey } from 'constants/theme'

import MEDIA from 'helpers/mediaTemplates'
import ornament from '../../../../static/svg/ornaments/ornament-dots-mob.svg'

export const Container = styled.section`
  padding: 0 2rem;
  position: relative;
  margin-top: -6rem;
  padding-top: 14rem;
  overflow: hidden;
  z-index: 1;
  &::before{
    content:'';
    background-image: url('${ornament}');
    background-repeat: no-repeat;
    background-size: cover;
    height: 21.5rem;
    width: 21.5rem;
    right: -12rem;
    top: -2rem;
    position: absolute;
    z-index: -1;
    ${MEDIA.MIN_PHONE`
      height: 21.5rem;
      width: 21.5rem;
      right: -10rem;
    `};
    ${MEDIA.MIN_DESKTOP_SM`
     height: 44rem;
     width: 44rem;
     right: -25rem;
     top: 8rem;
    `};
    ${MEDIA.MIN_DESKTOP_MD`
     height: 44rem;
     width: 44rem;
     right: -22rem;
     top: 9 rem;
    `};
  }
  ${MEDIA.MIN_DESKTOP_SM`
    padding-top: 22rem;
  `};
`

export const Header = styled.header`
  text-align: center;
  ${MEDIA.MIN_TABLET`
    max-width: 64rem;
    margin: 0 auto;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    max-width: 65.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    max-width: 85rem;
  `};
`

export const TitleCustom = styled.div`
  ${MEDIA.MIN_PHONE_LG`
    padding: 0 2rem;
    line-height: 1.5;;
  `};
`

export const Paragraph = styled.p`
  color: ${grey};
  font-size: 1.5rem;
  line-height: 2.7rem;
  text-align: center;
  ${MEDIA.MIN_PHONE_LG`
    padding: 0 2.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    line-height: 2.7rem;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.01em;
    margin-top: 4rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    line-height: 1.5;
    font-size: 2rem;
    text-align: center;
    letter-spacing: 0.01em;
  `};
`

export const ImageWrap = styled.div`
  img {
    width: 100%;
    ${MEDIA.MIN_DESKTOP_SM`
      width: 116.6rem;
      height:78.6rem;
    `};
  }
  ${MEDIA.MIN_DESKTOP_SM`
    display: flex;
    justify-content: center;
  `};
`

export const VideoWrap = styled.div`
  margin: 3rem 0 7.5rem 0;
  ${MEDIA.MIN_TABLET`
    margin: 5rem 0 10rem 0;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    margin: 6rem auto 12rem auto;
    max-width:116.2rem;
  `};
`
