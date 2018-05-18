# create-react-scorm-app

A boilerplate project that extends Facebook's [create-react-app](https://github.com/facebook/create-react-app) adding [SCORM](https://scorm.com/scorm-explained/) functionality to receive and send data to an LMS.

![Example gif](https://cdn.rawgit.com/simondate/assets/a5cf1000/scorm.gif)
## Installation

You need version 6+ of Node. Download it [here](https://nodejs.org/en/download/).

In your workspace open the your command line tool then run:

`git clone https://github.com/simondate/create-react-scorm-app.git`

`npm install`

`npm run start` to begin local development

## Deployment

Run `npm run build` to create a `build` directory.

Inside the build folder zip up all the items and add the zip to your LMS.

## Tips and tricks
*  Some LMS' require modifications to you `imsmanifest.xml` file. You can find this in the `public` directory.
*  [SCORM Cloud](https://cloud.scorm.com) is a great resource to test everything is working.
*  It's best to only import the `Scorm.js` file to one React component and use this to handle the sending and receiving of data.

## Future plans

*  More functionality
    * Quiz scores
    * Better error detection
    * Recover state
*  An xAPI version
    * When our IT department allows it ;)
