import styled from 'styled-components'
import MEDIA from '../../../../helpers/mediaTemplates'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  ${MEDIA.MIN_TABLET`
    padding: 2.75rem 2rem 0;
 `};
`

export const CloseButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 0;
  border: none;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  outline: none;
`

export const ButtonIcon = styled.span`
  position: relative;
  &,
  &::before,
  &::after {
    width: 2.5rem;
    height: 2px;
  }
  &::before,
  &::after {
    width: 2.5rem;
    height: 4px;
    background-color: #c4c4c4;
    display: inline-block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: all 0.3s;
  }

  &::before {
    left: 0;
    transform: rotateZ(45deg);
  }

  &::after {
    left: 0;
    transform: rotateZ(-45deg);
  }
`
