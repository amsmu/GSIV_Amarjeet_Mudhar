### How to run it

```
npm install

npm start

```

### What I've used and how things could be further improved

By default home screen shows upcoming movies as you scroll down there is show more button. With more time based on the state of window the need of that button can also be removed. When your search it'll show the related search results and if search field is emptied it reverts back to showing upcoming movies without the need to click on search button

I've used redux-saga for state management and to deal with side effects which have been implemented pretty modularly. ACTION TYPES could have been seperated into a global file though.

Performance is really good, to even more optimize it, lazy loading for images could be done and rendering only the items on the screen as well.

I love fractal structure and every related set of screens will be in one folder under routes and that too will be divided into components and containers. Due to the time constraint and the fact the project was very tiny I've passed whole state to details and list components which could've been reduced to only a couple of variables.

Both the layouts are responsive but on the list screen some cards could be of different heights so they can be equalized by building an equalizer component.

A couple of places I've used inline css which could've been improved by injecting that via js. Yes, I'm advocating CSS insertion using javascript.

I generally take a couple of days to setup a big project so that it can be as modular as it could possibly be. So with more time available, from routing, to configs, from common sass files to fractal structure for actions/sagas/reducers could be implemented.

Note: Cast, Director, rating wasn't available in the API surprisingly. So, I've avoided them.

### How to improve this challenge

I think it was a really wholesome challenge to test a frontend developer's way of coding, pattern he uses, state management and implementing XHR calls.

Thank you!
