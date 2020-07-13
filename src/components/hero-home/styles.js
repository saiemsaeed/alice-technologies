import styled from 'styled-components'
import MEDIA from '../../helpers/mediaTemplates'

import { primaryColor } from 'constants/theme'

export const Section = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  padding: 0 9rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA.DESKTOP_MD`
    flex-direction: column;
  `};

  ${MEDIA.TABLET`
    padding: 0 2rem;
  `}
`

export const HeroContent = styled.div`
  color: ${primaryColor};
  margin-bottom: 10px;
  width: 40%;
  ${MEDIA.DESKTOP_MD`
    width: 100%;
    padding-bottom: 3rem;
  `};
`

export const HeroTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 900;
  margin-bottom: 3rem;
  line-height: 1.4;
  color: ${primaryColor};

  ${MEDIA.DESKTOP_XG`
    margin-top: 5rem;
    font-size: 3.4rem;
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
    margin-top: 2rem;
    font-size: 3.2rem;
  `};
`

export const HeroSubtitle = styled.p`
  margin-bottom: 3rem;
  color: ${primaryColor};
  font-size: 1.2rem;
  line-height: 2.3rem;
  font-weight: 300;
  ${MEDIA.MIN_PHONE`
    font-size: 1.4rem;
    line-height: 2.5rem;
  `};
  ${MEDIA.MIN_PHONE_LG`
    font-size: 1.75rem;
    line-height: 3rem;
  `};
  ${MEDIA.MIN_DESKTOP_SM`
    font-size: 1.6rem;
    line-height: 3rem;
    padding-right: 5rem;
    max-width: 70rem;
  `};
  ${MEDIA.MIN_DESKTOP_LG`
    font-size: 2.25rem;
    line-height: 4rem;
  `};
`

export const HeroVideoWrapper = styled.div`
  position: relative;
  ${MEDIA.DESKTOP_MD`
    max-width: 100%;
  `};
  ${MEDIA.MIN_DESKTOP_MD`
    max-width: 70%;
    right: -9rem;
  `};
`

export const VideoPlayer = styled.video`
  border-radius: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  ${MEDIA.DESKTOP_MD`
    border-radius: 2rem;
  `};
`

export const ActionButtonContainer = styled.div`
  ${MEDIA.MIN_DESKTOP_SM`
    padding-right: 5rem;
  `};
`
