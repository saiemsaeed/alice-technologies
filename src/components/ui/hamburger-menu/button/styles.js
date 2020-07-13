import styled from 'styled-components'

const menuStyle = ({ isShowingMenu }) => {
  if (isShowingMenu) {
    return `
      width: 1.6rem;
      height: 3px;
      `
  }
  return `
    background-color: #c4c4c4;
    height: 2px;
    width: 1.6rem;
  `
}

const rotateOnShow = deg => ({ isShowingMenu }) =>
  isShowingMenu ? `rotate(${deg})` : ''

const moveOnShow = dist => ({ isShowingMenu }) =>
  isShowingMenu ? '0' : `${dist}`

export const Container = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 0;
  border: none;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  outline: none;
  &:active,
  &:focus {
    background: transparent;
    outline: none;
  }
`

export const MenuButtonIcon = styled.span`
  position: relative;
  &,
  &::before,
  &::after {
    display: inline-block;
    ${menuStyle}
  }
  &::before,
  &::after {
    content: '';
    background-color: #c4c4c4;
    position: absolute;
  }

  &::before {
    left: 0;
    top: ${moveOnShow('-6px')};
    transform: ${rotateOnShow('45deg')};
  }
  &::after {
    left: 0;
    top: ${moveOnShow('6px')};
    transform: ${rotateOnShow('135deg')};
  }
`
