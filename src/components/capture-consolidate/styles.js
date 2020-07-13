import styled from 'styled-components'

import MEDIA from 'helpers/mediaTemplates'
import maxWidthContainer from 'helpers/maxWidthContainer'
import { grey, white } from 'constants/theme'

import ornamentsTriangle from '../../../static/svg/bg-triangle-particles-left.svg'

export const ContainerWrapper = styled.section`
  position: relative;
  overflow: hidden;
  &::before {
    content:'';
    background-image: url('${ornamentsTriangle}');
    background-repeat: no-repeat;
    background-size: cover;
    height: 21.5rem;
    right: -10.5rem;
    bottom: 8rem;
    position: absolute;
    width: 21.5rem;
    ${MEDIA.MIN_DESKTOP_SM`
      bottom: -10rem;
      right: -32rem;
      height: 44rem;
      width: 44rem;
    `};
    ${MEDIA.MIN_DESKTOP_MD`
      right: -32rem;
    `};
    ${MEDIA.MIN_DESKTOP_LG`
      right: -32rem;
    `};
  }
`

export const Container = styled.section`
  padding: 0 2rem;
  overflow: hidden;
  background: ${white};
  ${MEDIA.MIN_DESKTOP_SM`
    padding: 2rem 8rem 0 9rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    padding: 4rem 14rem 0;
  `};
  ${MEDIA.MIN_DESKTOP_XG`
    ${maxWidthContainer('160rem')}
    padding-top: 4rem;

  `};
`

export const Body = styled.div`
  ${MEDIA.MIN_TABLET`
    display: flex;
  `};
`

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
  ${MEDIA.MIN_DESKTOP_LG`
    width: 66rem;
  `};
`

export const TeamPicture = styled.picture``

export const TextContent = styled.div`
  color: ${grey};
  line-height: 2.7rem;
  font-size: 1.5rem;
  ${MEDIA.MIN_TABLET`
    margin-left: 3rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    margin-left: 6rem;
    max-width: 56.5rem;
    padding-right: 2rem;
  `};
`

export const Paragraph = styled.p`
  margin-bottom: 2.5rem;
  ${MEDIA.MIN_DESKTOP_LG`
    line-height: 1.5;;
    font-size: 20px;
    letter-spacing: 0.01em;
  `};
`

export const List = styled.ul`
  padding-left: 2rem;
  ${MEDIA.MIN_DESKTOP_SM`
    display: flex;
    justify-content: flex-star;
    line-height: 2.5rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    line-height: 1.5;
    font-size: 20px;
    letter-spacing: 0.01em;
    padding-left: 2rem;
    padding-right: 4rem;
  `};
`

export const ListGroup = styled.div`
  ${MEDIA.MIN_DESKTOP_SM`
    margin-right: 6rem;
  `};
`

export const ListItem = styled.li`
  padding-left: 2.4rem;
  position: relative;
  margin-bottom: 2rem;
  ${MEDIA.MIN_DESKTOP_SM`
    margin-bottom: 2rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    margin-bottom: 3rem;
  `};
  &::before {
    content: '';
    border-radius: 100%;
    position: absolute;
    width: 0.9rem;
    height: 0.9rem;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);

    background: linear-gradient(
        180deg,
        rgba(73, 71, 185, 0.6) 0%,
        rgba(100, 112, 226, 0.6) 100%
      ),
      linear-gradient(0deg, rgba(42, 42, 53, 0.8), rgba(42, 42, 53, 0.8)),
      #4947b9;
  }
`
