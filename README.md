# [Bulletin](https://ericwindmill.github.io/later-chat-demo/)

## Background
It's fun to leave notes like this:

![bulletin board](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1496674527/IMG_2806_vkddzz.jpg)

But what its 2017 so we're livin' like this: 

![iPhone kids](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1496629934/tech_yonvl1.jpg)

### Enter Bulletin. 
Now you can leave your friends surprise messages at all the places you know they'll go. 

Bulletin is a mobile app that allows users to drop notes at a location for their followers to see when they're there. Imagine walking into a boring old grocery store and getting a surprise note from your pal.

Users will also be able to post notes to a 'discover' board and 'followers' board based on their current location. Bars, restaurants, parks, etc. You can drop a note anywhere.

Bulletin was made by Monte Jiran, Grey Keith, Nathan Li, and Eric Windmill 

![Public BoardGif](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_450/v1497279751/later-chat/search_users_gif.gif)
![Map Gif](http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_450/v1497279745/later-chat/map_gif.gif)


## Features 
* Users accounts have secure token authentication, so they only have to sign in once (per device)
* Users can drop notes to their followers - they can select one or multiple followers per note.
* App integrates with native camera so that users can send images as notes. 
* Users get notified when they have unread notes at a given location.
* Users can follow other users and see their posts.
* Locations have public boards
* Users can post to a location based followers feed OR a location based public feed.
* The app uses native geolocation in parallel with Google Places and Apple Maps.
* "Treasure Hunt Map" (Users can see *where* they have messages, but not from who or the messages content.)


## Product Design
Bulletin was rapidly built from conception in 8 days.
The design and workflow was guided by our app proposal. This proposal included database schema, sample state for React/Redux, wireframes, and implementation timeline.

## Technology
One of the greatest challenges of this project was quickly learning new technologies.

### Frontend Technology
* Javascript
* React Native
  * React flavored library made by Facebook. Allows us to create mobile apps for both iOS and Android with Javascript (which is incredible.)
  * Styled with ReactNative flavored CSS.
* Redux
  * The Redux cycle and library is implemented to organize and architect the frontend.
* Xcode project management
* AWS S3 file storage

### Backend Technology
* Ruby on Rails with Heroku
  * The database was built with Ruby on Rails. The rails app is simply a location for our React Native app to make RESTful API calls to our database. The Rails app additionally handles user authentication.
* PostgreSQL

### Additional
* AWS S3 file storage for images
* Jekyll for rapidly building demo page. 
* Appetize.io to display a live demo on the [demo page](https://ericwindmill.github.io/later-chat-demo/).

## Future Implementations
* Users can like posts on the public and/or following board
* Users get like and follows notifications
* Users have a profile
* Hot activity places nearby
* Video notes
