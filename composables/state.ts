import { Work } from 'types/resource'

export const useArticles = () =>
  useState('articles', () => [
    {
      title: 'Pagination with Vue.js',
      date: 'Jun 2, 2018',
      readTime: '5 min',
      excerpt:
        "I re-invented the good ol' pagianation wheel I had to re-invent the wheel but not without showing off some of some really cool things Vue.js can do.",
      to: 'https://medium.com/@obapelumi/pagination-with-vuejs-1f505ce8d15b',
      target: '__blank',
      featured: true
    },
    {
      title: 'HTML Form Validation',
      date: 'Feb 16, 2019',
      readTime: '4 min',
      excerpt:
        'In this article I talked about how you can leverage HTML5 validation while overriding the boring defaults, so you can display validation errors as fancy as you like',
      to: 'https://itnext.io/form-validation-with-html-vuejs-54ec18e473aa',
      target: '__blank',
      featured: true
    },
    {
      title: 'Deploying Adonis.js 5.0 to Google App Engine (Part 1)',
      date: '29 Apr 2020',
      readTime: '3 min',
      excerpt:
        'I had been exploring Adonis.js 5.0 and Google Cloud Platform and decided to document what I had learnt, from building out the Adonis.js 5.0 application locally to deployment on Google App Engine',
      to: 'https://dev.to/crudecoder/deploying-adonis-js-5-0-app-to-google-app-engine-part-1-1g93',
      target: '__blank'
    },
    {
      title:
        'Deploying Adonis.js 5.0 to Google App Engine From Version Control',
      date: '19 May 2020',
      readTime: '3 min',
      excerpt:
        'In a previous article I described the deployment process on Google App Engine. In this article I talked about how to set up Google Cloud Build to automate the deployment of an Adonis.js 5.0 application from version control',
      to: 'https://dev.to/crudecoder/deploying-adonis-js-5-0-to-google-app-engine-from-version-control-1o33',
      target: '__blank'
    }
  ])

export const useWork = () =>
  useState<Work[]>('work', () => [
    {
      title: 'VAMP Facilities Intelligence',
      description:
        'VAMP Facilities Intelligence is a smart solution for data-driven facilities management optimization. The tool collects data from sites and the market in order to drive real time analytics for optimizing facility operating costs, asset health and customer experience.',
      to: 'https://vampfi.com',
      target: '__blank',
      imagePath: '/images/vampfi.jpg',
      year: 2019,
      company: {
        name: 'Filmo Real Estaate',
        website: 'https://filmorealty.com'
      }
    },
    {
      title: 'DemandPointe',
      description:
        'DemandPointe is a State Government revenue collection solution designed to provide a simple and fraud free taxation system. Developed with Vue.js, CodeIgniter/PHP & MySQL',
      to: 'https://demandpointe.com',
      target: '__blank',
      imagePath: '/images/demandpointe.jpg',
      year: 2020,
      company: {
        name: 'Spacepointe',
        website: 'https://spacepointe.com'
      }
    }
  ])

export const useYear = () => useState('year', () => new Date().getFullYear())
