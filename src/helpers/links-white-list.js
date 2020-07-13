import iconPhone from './../../static/svg/icon-phone.svg'
import iconLinkedin from './../../static/svg/icon-linkedin.svg'
import iconLocation from './../../static/svg/icon-location.svg'

export default [
  {
    title: 'Product',
    links: [
      { label: 'Persuits', href: '/', state: { from: 'persuits' } },
      { label: 'Preconstruction', href: '/', state: { from: 'preconstruction' } },
      { label: 'Use Cases', href: '/use-cases' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/about', state: { from: 'careers' } },
      { label: 'Blog', href: 'https://medium.com/alice-technologies' },
      {
        label: 'Support',
        href: 'https://support.alicetechnologies.com/hc/en-us',
      },
      { label: 'Legal', href: '/legal' },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        label: '833.254.2383',
        href: 'tel:+01-833-254-2383',
        icon: iconPhone,
      },
      {
        label: '1040 Noel Dr Suite 203',
        sublabel: 'Menlo Park, CA 94025',
        href:
          'http://maps.google.com/?q=1040 Noel Dr Suite 203 Menlo Park, CA 94025',
        icon: iconLocation,
        doubledLine: true,
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/alice-technologies-inc',
        icon: iconLinkedin,
      },
    ],
  },
]
