import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import { primaryColor } from 'constants/theme'
import MEDIA from '../../helpers/mediaTemplates'
import LaptopImage from '../../../static/img/home/laptop-left.png'

export const Section = styled.section`
  ${MEDIA.MIN_DESKTOP_MD`
    background-image: url('${LaptopImage}');
    background-position: left bottom;
    width: 100vw;
    margin-left: -52vw;
    left: 50%;
    position: relative;
    background-size: contain;
    min-height: 70vh;
    display: inline-flex;
  `}
`

export const Container = styled.div`
  padding: 0 9rem;
  display: flex;
  justify-content: flex-end;

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

export const Content = styled.section`
  text-align: center;
  display: flex;
  justify-content: flex-end;
  background-image: url('${LaptopImage}');
  background-position: -6rem 0;
  padding: 170px 0 20px;
  background-size: 62%;
  position: absoulte;
  left: 0;
`

export const PlanWrapper = styled.div`
  display: flex;
  flex: 0 0 51%;
  max-width: 51%;
  flex-wrap: wrap;
  justify-content: space-between;
  ${MEDIA.DESKTOP_MD`
    flex: 0 0 100%;
    max-width: 100%;
  `}
`

// export const Col = styled.div`
//   flex: 0 0 43%;
//   max-width: 43%;
//   margin-bottom: 60px;
//   ${MEDIA.PHONE_LG`
//     flex: 0 0 100%;
//     max-width: 100%;
//     margin-bottom: 5.5rem;
//   `}
// `

export const PlanIcon = styled.div`
  margin-bottom: 2rem;
  width: 5.6rem;
`

export const PlanDescription = styled.div`
  color: ${primaryColor};
  font-size: 2.2rem;
  line-height: 1.7;
  font-weight: 500;

  ${MEDIA.DESKTOP_XG`
    font-size: 1.6rem;
  `}
  ${MEDIA.DESKTOP_MD`
    font-size: 1.6rem;
  `};
  ${MEDIA.DESKTOP`
    font-size: 1.8rem;
  `};
  ${MEDIA.TABLET`
    font-size: 1.8rem;
  `};
`

export const Spacer3 = styled.div`
  height: 4rem;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 4.8rem;
  line-height: 1.5;
  font-weight: 800;
  max-width: 60rem;
  color: ${primaryColor};
  margin-bottom: 4rem;
  ${MEDIA.DESKTOP_XG`
    font-size: 3.2rem;
  max-width: 40rem;
  margin-bottom: 0rem;

  `}
  ${MEDIA.DESKTOP_MD`
    font-size: 3.2rem;
    text-align: left;
  max-width: 40rem;
  `};
  ${MEDIA.DESKTOP`
    font-size: 3.2rem;
  max-width: 100%;
  `};
  ${MEDIA.TABLET`
    font-size: 3rem;
    text-align: center;
    max-width: 100%;
    margin: 2rem 0;
  `};

  /* ${MEDIA.PHONE_LG`
    background-image: none;
    text-align: right;
    line-height: 3.5rem;
  `} */
`
export const StyledCol = styled(Col)`
  margin: 2rem 0;

  ${MEDIA.TABLET`
  margin: 4rem 0;
  `};
`
