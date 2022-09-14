What I Learned:

1. After building out the About Us page using jsx and css module, I realized that the data being rendered may need to be updated by the client. Therefore, I built separate smaller components and pages and passed in the data using props.

However, this took an unexpected turn. I also needed to pass in the css classes. I couldn't just simply pass in classes from the module.css file, because I am mapping through data that has different styles.

Targeting the css module classes as I normally would returns a {TypeError}.  
`className={classes.props.leafBackground}`
It took me severals hours of testing to realize that since I was mapping I had to target the css module classes as a string.
`className={classes[props.leafBackground]}`
