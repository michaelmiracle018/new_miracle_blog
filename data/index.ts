export const navbarData = {
  homeTitle: 'Miracle\'s Blog',
}

export const footerData = {
  author: 'MIchael Miracle',
  aboutAuthor: 'Hi! I am Miracle, a Tech enthusiast, problem solver and software engineer. Currently working at Credmap',
  authorInterest: 'I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let\'s connect.',
  aboutTheSite: 'This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it\'s deployed in Vercel.',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description: 'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description: 'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Michael Miracle',
  description: 'Software Engineer, Problem Solver, Web Enthusiast.',
  aboutMe: 'Front-end developer with two and half years of experience in building responsive web applications. Good programming and communication skills. Detailed-oriented, organized, and meticulous employee. Proficient with HTML, CSS, and JavaScript as  well as React and Vue. Helped develop software that allows for trading goods and services across Africa.',
}

export const seoData = {
  description: 'Miracle, Software Engineer at Credmap, with over 2.5+ years experience in software development.',
  ogTitle: 'Miracle codes and helps others learn Javascript, Typescript, Vue, Nuxt, & Problem Solving',
  twitterDescription: 'My blog website, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc',
  image: '../assets/images/WhatsApp Image 2023-09-05 at 9.51.00 AM (1).jpeg',
  mySite: '',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: '@qdnvubp' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
