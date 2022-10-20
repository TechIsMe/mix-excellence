## Johnson Thieu


What I Learned:

1. After building out the About Us page using jsx and css module, I realized that the data being rendered may need to be updated by the client. Therefore, I built separate smaller components and pages and passed in the data using props.

However, this took an unexpected turn. I also needed to pass in the css classes. I couldn't just simply pass in classes from the module.css file, because I am mapping through data that has different styles.

Targeting the css module classes as I normally would returns a {TypeError}.  
`className={classes.props.introBackground}`
It took me severals hours of testing to realize that since I was mapping I had to target the css module classes as a string.
`className={classes[props.introBackground]}`

However, the best work around was to NOT use an array of data objects. But just one object with specific naming of data for this page.

Since this is just one page with one purpose we could pass in specific props and classes styles

This also eliminated the use of mapping through AboutUsList.js
`<AboutUsItems introBackground={about.introBackground}/>`

## Bruktawit Wolde

## What I Learned 

This project taught me so much about developing a large and very complicated application. This was my first collaboration in a  large project with React and as well as in backend .Our goal was to create an app from a design that was very well thought out from our fellow apprentice UX/UI Design Teams.

## Author
  * Johnson Thieu
  * Bruktawit Wolde
