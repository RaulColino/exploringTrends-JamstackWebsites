# ExploringTrends: Jamstack Websites
This project is about trying out some of the latest trends in web development by:
- Creating a Jamstack portfolio (Actually two :D). 
- Testing and comparing two different frameworks: - Gridsome vs Gatsby- 
- Connecting them to a Strapi headless CMS.

## Relevant technologies used in this project
- React
- Vue
- Gatsby
- Gridsome
- GraphQL
- Strapi
- TailwindCSS

## The result

Two minimalistic and hackable starters to create a portfolio with a CMS to publish your content in Markdown.


<p>
<img src="/gridsome-main-page-screenshot.png" alt="gridsome main page" height="440" width="410"> 
<img src="/gatsby-project-page-screenshot.png" alt="a gatsby project page" height="440" width="410">
</p>
<!--
<img src="/gridsome-main-page-screenshot.png"  height="500" width="500" >  |  <img src="/gatsby-project-page-screenshot.png" height="500" width="500">
---------------------------------------------------------------------------|--------------------------------------------------------------------------
<div style= "display: block">
<span style ="display: inline-block;" > ![gridsome-page-img](/gridsome-main-page-screenshot.png) </span>
<span style ="display: inline-block;" > ![gridsome-page-img](/gridsome-main-page-screenshot.png) </span>
</div>
<img style ="display: inline-block;" src="/gridsome-main-page-screenshot.png"  height="500" width="500"> 
<img style ="display: inline-block;" src="/gatsby-project-page-screenshot.png" height="500" width="500">
![gridsome-page-img](/gridsome-main-page-screenshot.png)   ![gatsby-page-img](/gatsby-project-page-screenshot.png)
-->

## Features
- UI easy to customize with TailwindCSS.
- Publish your content out of the box with the defined schema or customize all to your preference.
- Responsive design.
- Superfast image loading and link prefetching.
- Near 100, 100, 100, 100 score on Google Lighthouse.
- Main page and dynamic page generation for each project created.

## Setup the project locally

**1. Clone the repository**

```
git clone https://github.com/RaulColino/exploringTrends-JamstackWebsites.git
```

**2. Run the backend**

Go to the folder strapi-backend and open a terminal.
Execute the following commands to install the dependencies and run your server

```bash
npm install
npm run develop
```

**3. Run the frontend**

Gridsome:
Go to the gridsome-frontend folder, open a terminal an run:
```bash
npm install
npm run develop
```

Gatsby:
Go to the gatsby-frontend folder, open a terminal an run:
```bash
npm install
npm run develop
```

Gatsby is running here: [http://localhost:8000](http://localhost:8000)

Gridsome is running here: [http://localhost:8080](http://localhost:8080)

Strapi CMS is running here: [http://localhost:1337/admin](http://localhost:1337/admin)

## References
https://gridsome.org/docs/

https://www.gatsbyjs.com/docs/tailwind-css/

https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi

https://www.gatsbyjs.com/docs/debugging-cache-issues/

https://graphql.org/learn/

## Credits to
Russell Heimlich fo the [image generator](https://github.com/kingkool68/dummyimage)

