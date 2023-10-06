<h1 style="color: #6565d2">Dog-api</h1> 

## Description
This app was created with stack:
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [React Router Dom](https://reactrouter.com/web/guides/quick-start)
* [TanStack Query v4](https://tanstack.com/query/v4/) 

## Installation dependencies
```bash
npm install
```
## Start app
```bash
npm run dev
```


### Instructions
* Single-page application (SPA). There should only exist a single html file in the project.
* Build an application for viewing images of dogs by making requests to the Dog API (https://dog.ceo/dog-api/documentation/).
* On the front page of the application, a table or list of some kind should list all the different breeds of dogs that can be
  viewed (see "List all breeds" in the documentation).
* Each breed should link to a new "page" where multiple images of dogs are listed using the "by breed" endpoint as described in the documentation. Each of these new pages should have a proper navigation route, so that after entering a breed page, refreshing the site or using the hash "#" property of window.location should keep you on the same breed page.
* Each breed site should include a list of the breed's sub-breeds (if any). These sub-breeds should function similarly to the main breeds, linking to separate sub-breed sites where lists of images specific to that sub-breed are displayed.
* Each breed and sub-breed site should also display the name of the breed being viewed.
* On each site (index, breed, sub-breed), there should also be a random image displayed and a button that allows you to refresh this random image. When you are on the breed or sub-breed site, the random image should specifically belong to the selected breed or sub-breed.### Requirements
* An index page should display a random image of a dog from any breed and include a refresh button for the image. Additionally, the page should feature a list of different breeds, with each breed linking to a new sub-page.
* A breed page should display a random image of a dog from the specified breed and include a refresh button for the image. Additionally, the page should feature a list of different sub-breeds (if any), with each sub-breed linking to a new sub-page. The breed page should also render all the images provided by the API for that breed (e.g., from https://dog.ceo/api/breed/hound/images). Finally, the page should include text identifying the breed being viewed.
* A sub-breed page should display a random image of a dog from the specified sub-breed and include a refresh button for the image. Additionally, the sub-breed page should render all the images provided by the API for that sub-breed (e.g., from https://dog.ceo/api/breed/hound/afghan/images). The page should also feature text identifying the sub-breed being viewed.
* Furthermore, every page, except for the index page, should incorporate a URL identifier that allows for the correct breed or sub-breed to be displayed. For instance, if I attempt to navigate to http://mysite.com#breed-hound, the page for the hound breed should be directly shown.
* There can only be a single HTML file in the project that is directly rendered by the browser.


