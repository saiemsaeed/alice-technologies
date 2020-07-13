import React from 'react'
import PropTypes from 'prop-types'

const IconCrossBlue = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 1.7L15.3 0L8.5 6.8L1.7 0L0 1.7L6.8 8.5L0 15.3L1.7 17L8.5 10.2L15.3 17L17 15.3L10.2 8.5L17 1.7Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="8.5"
        y1="23.2132"
        x2="8.5"
        y2="-1.00782e-06"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F2134" />
        <stop offset="1" stopColor="#3A366D" />
      </linearGradient>
    </defs>
  </svg>
)

IconCrossBlue.propTypes = {
  fill: PropTypes.string,
  fillSvg: PropTypes.string,
}

export default IconCrossBlue
