import BREAKPOINTS from 'constants/breakpoints'

import graph1Desk from '../../../static/svg/graphs/explore-graph-desk-1.svg'
import graph2Desk from '../../../static/svg/graphs/explore-graph-desk-2.svg'
import graph3Desk from '../../../static/svg/graphs/explore-graph-desk-3.svg'
import graph4Desk from '../../../static/svg/graphs/explore-graph-desk-4.svg'

export default [
  {
    id: 1,
    label: '1. Traditional scheduling and estimating practices ',
    color: '#F1C40F',
    selected: true,
    graphSources: [
      {
        srcSet: graph1Desk,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: graph1Desk,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
    explains: [
      {
        style: 1,
        texts: [
          'Manual schedule creation 4',
          '4 weeks to create',
          '1 option generated',
        ],
      },
    ],
  },
  {
    id: 2,
    label: '2. Starting to explore options',
    color: '#AB49C9',
    selected: false,
    graphSources: [
      {
        srcSet: graph2Desk,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: graph2Desk,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
    explainStyle: 1,
    explains: [
      {
        style: 2,
        texts: ['20 M', 'Labor cost savings', '60 days', 'Schedules savings'],
      },
      {
        style: 3,
        texts: [
          '3 days to setup',
          '2 minutes to generate',
          '14 options generated',
        ],
      },
    ],
  },
  {
    id: 3,
    label: '3. Exploration: Selective overtime for crews',
    color: '#358EFE',
    selected: false,
    graphSources: [
      {
        srcSet: graph3Desk,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: graph3Desk,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],
    explainStyle: 3,
    explains: [
      { style: 6, texts: ['2 minutes to generate', '7 scheduling options'] },
    ],
  },
  {
    id: 4,
    label: '4.Exploration: Aggresive overtime for crews',
    color: '#FF4A3D',
    selected: false,
    graphSources: [
      {
        srcSet: graph4Desk,
        media: `(max-width: ${BREAKPOINTS.PHONE}px)`,
      },
      {
        srcSet: graph4Desk,
        media: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
      },
    ],

    explains: [
      {
        style: 4,
        texts: [
          '13.1 M',
          'Labor cost savings',
          '153 days',
          'Schedules savings',
        ],
      },
      { style: 5, texts: ['2 minutes to generate', '2 scheduling options'] },
    ],
  },
]
