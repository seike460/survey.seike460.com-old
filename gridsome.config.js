// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'survey.seike460.com',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'survey/*.md',
        typeName: 'SurveyPage',
      },
      templates: {
        SurveyPage: '/survey/:conference'
      }
    }
  ]
}
