import BREAKPOINTS from 'constants/breakpoints'

import answersDemoDesk1x from '../../../static/img/alice-demo3-macbook-1x.png'
import answersDemoDesk2x from '../../../static/img/alice-demo3-macbook-2x.png'
import answersDemoDesk3x from '../../../static/img/alice-demo3-macbook-3x.png'
import answersDemoMob1x from '../../../static/img/alice-demo3-mobile-1x.png'
import answersDemoMob2x from '../../../static/img/alice-demo3-mobile-2x.png'
import answersDemoMob3x from '../../../static/img/alice-demo3-mobile-3x.png'

export default [
  {
    id: 1,
    label: 'What if we used two tower cranes instead of one?',
    color: '#AB49C9',
    days: '46-157',
    amount: '366,155 - 386,000',
    selected: true,
    answer: {
      title: 'Two Tower Cranes',
      days: '823 days',
      amount: '$119,000,000',
    },
    demoSources: [
      {
        srcSet: `${answersDemoMob1x} 1x, ${answersDemoMob2x} 2x, ${answersDemoMob3x} 3x`,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: `${answersDemoDesk1x} 1x, ${answersDemoDesk2x} 2x, ${answersDemoDesk3x} 3x`,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
  },
  {
    id: 2,
    label: 'What if you have your crews work overtime?',
    color: '#3CBA7A',
    days: '46-157',
    amount: '366,155 - 386,000',
    selected: false,
    answer: {
      title: 'Crew Overtime',
      days: '798 days',
      amount: '$129,000,000',
    },
    demoSources: [
      {
        srcSet: `${answersDemoMob1x} 1x, ${answersDemoMob2x} 2x, ${answersDemoMob3x} 3x`,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: `${answersDemoDesk1x} 1x, ${answersDemoDesk2x} 2x, ${answersDemoDesk3x} 3x`,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
  },
  {
    id: 3,
    label: 'What if I had the optimal number of each type of crew?',
    color: '#FF6C62',
    days: '46-157',
    amount: '366,155 - 386,000',
    selected: false,
    answer: {
      title: 'Optimal Crews',
      days: '815 days',
      amount: '$111,000,000',
    },
    demoSources: [
      {
        srcSet: `${answersDemoMob1x} 1x, ${answersDemoMob2x} 2x, ${answersDemoMob3x} 3x`,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: `${answersDemoDesk1x} 1x, ${answersDemoDesk2x} 2x, ${answersDemoDesk3x} 3x`,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
  },
  {
    id: 4,
    label: 'What is the impact of using more prefab work?',
    color: '#74B1FF',
    days: '46-157',
    amount: '366,155 - 386,000',
    selected: false,
    answer: {
      title: 'Increased Prefab',
      days: '780 days',
      amount: '$126,000,000',
    },
    demoSources: [
      {
        srcSet: `${answersDemoMob1x} 1x, ${answersDemoMob2x} 2x, ${answersDemoMob3x} 3x`,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: `${answersDemoDesk1x} 1x, ${answersDemoDesk2x} 2x, ${answersDemoDesk3x} 3x`,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
  },
  {
    id: 5,
    label: 'What if I phase the project differently?',
    color: '#74B1FF',
    days: '46-157',
    amount: '366,155 - 386,000',
    selected: false,
    answer: {
      title: 'Alternative Project Phasing',
      days: '865 days',
      amount: '$121,000,000',
    },
    demoSources: [
      {
        srcSet: `${answersDemoMob1x} 1x, ${answersDemoMob2x} 2x, ${answersDemoMob3x} 3x`,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: `${answersDemoDesk1x} 1x, ${answersDemoDesk2x} 2x, ${answersDemoDesk3x} 3x`,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
  },
]
