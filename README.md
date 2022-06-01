# SQL Query Runner

This is a dummy react application capable of running SQL queries and displaying the results of said query.

## Description

The application contains following components :

- Schema dropdown to select different Schemas.
- Query dropdown to select different queries.
- One query editor to write custom queries.
- A material UI button to run the queries.
- Dummy data table which will contain dummy data (taken from `https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv`)

## Live Demo

`Live example on netlify` https://queryrunner.netlify.app/

## Tech Stack

**Framework :** React js

**Additional dependencies/packages :** Material-UI, react-ace ,axios

## Features

- Query selection from dropdown
- Search with custom query
- To render large amount of data we can use infinite scroll (https://www.npmjs.com/package/react-infinite-scroll-component) but due to time constraint I have not completed this part

## Application Performance

    Page load time ~ 1.27s

- Website to check page load time : https://pagespeed.web.dev/
- We can check the performance of our application from `Lighthouse` section in devtools

## Optimizations

- To decrease the load time I have removed the unused js and unnecessary re-render of react components
- `Lazy loading` of components can also be an option to Optimize the loading time of the application

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratim-kundu-946a851a4/)

## Author

- [@pratimk999](https://github.com/pratimk999)
