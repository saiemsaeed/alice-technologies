import styled from 'styled-components'
import maxWidthContainer from 'helpers/maxWidthContainer'

import MEDIA from 'helpers/mediaTemplates'
import { grey, greyLight, white } from 'constants/theme'

export const ContainerWrapper = styled.section`
  position: relative;
  &::before {
    content: '';
    background: linear-gradient(180deg, ${greyLight} 47.86%, ${white} 100%);
    clip-path: polygon(
      0 calc(0% + 20rem),
      100% calc(0% + 10rem),
      100% 100%,
      0 calc(100%)
    );
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    ${MEDIA.MIN_PHONE`
      clip-path: polygon(0 calc(0% + 20rem), 100% calc(0% + 6rem), 100% 100%, 0 calc(100%));
    `};
    ${MEDIA.MIN_PHONE_LG`
      clip-path: polygon(0 calc(0% + 18rem), 100% calc(0% + 4rem), 100% 100%, 0 calc(100%));
    `};
  }
`

export const Container = styled.div`
  padding: 0 2rem;
  margin-bottom: 6rem;
  padding-top: calc(27rem);
  margin-top: calc(-27rem);
  display: flex;
  flex-direction: column;
  ${MEDIA.MIN_TABLET`
    flex-direction: row;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding-left: 10rem;
    padding-right: 8rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    padding-left: 16rem;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    ${maxWidthContainer('160rem')}
  `};
`

export const Header = styled.header`
  padding-right: 5rem;
  ${MEDIA.MIN_PHONE`
    padding-right: 10rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    padding-right: 15rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    padding-right: 0rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    padding-right: 5rem;
  `};
`

export const Paragraph = styled.p`
  line-height: 27px;
  font-size: 15px;
  color: ${grey};
  ${MEDIA.MIN_DESKTOP_SM`
   line-height: 2.7rem;
   font-size: 1.5rem;
   letter-spacing: 0.01em;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
   line-height: 1.5;;
   font-size: 20px;
   letter-spacing: 0.01em;
  `};
`

export const ParagraphWrap = styled.div`
  padding-right: 1rem;
`

export const Content = styled.div`
  ${MEDIA.MIN_TABLET`
    order: 2;
    flex: 1;
    padding-top: 7rem;
    max-width: 60rem;
    padding-right: 0rem;
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    max-width: 50rem;
    padding-right: 0rem;
    padding-top: 7rem;
  `};
`

export const Pictures = styled.div`
  height: 45.5rem;
  position: relative;
  ${MEDIA.MIN_TABLET`
    order: 1;
    flex: 1;
  `};
`

export const DemoImg = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100%;
  }
`

export const DayImg = styled.picture`
  position: absolute;
  position: absolute;
  top: 15rem;
  left: 0;
  box-shadow: 0px 14px 60px rgba(0, 0, 0, 0.15);
  img {
    width: 23.5rem;
    height: 30.3rem;
  }
`
