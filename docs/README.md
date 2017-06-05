# README
[Link to live site](https://www.lmgtfy.com)

## Background
It's fun to leave notes like this:
![bulletin board][http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1496629933/board_riljez.jpg]

But what its 2017 so we're livin' like this: 
![iPhone kids][http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_400/v1496629934/tech_yonvl1.jpg]

#### Enter Bulletin. 
Now you can leave your friends surprise messages at all the places you know they'll go. 

Bulletin is a mobile app that allows users to drop notes at a location for their followers to see when they're there. Imagine walking into a boring old grocery store and getting a surprise note from your pal.

Users will also be able to post notes to a 'discover' board and 'followers' board based on their current location. Bars, restaurants, parks, etc. You can drop a note anywhere.

## MVPS
* Users have accounts and followers
* Users can post to a location based followers feed
* Users can leave notes to followers
* Locations have public boards
* Users can access location's boards
* Geolocation
* Auth
* Hosted on AWS
* Read Me
* Demo Website

#### Future Features
* Treasure Hunt Map (Users can see *where* they have messages, but not from who or the messages content.)
* Users can like on the public board
* Users get like and follows notifications
* Hot activiry places nearby
* Send short videos instagram style
* Direct Message Limitations
* Users can like posts 

## Technology
* PostgreSQL
* Ruby / Rails Backend
* JS / React Native / Redux Frontend
* GoogleMaps API
* Facebook / Google Auth
* Hooking into iPhone functionality.

### Technological Challenges
The first and most obvious challenge is the learning curve for techs that we dont know, inlcluding React Native, Xcode, Google Maps API, hooking into the iPhone's camera and location, and adding auth to a mobile app.

The second challenege is optimizing the the number of database queries made because the app is so heavily based on both the current user's location and neary by locations. We'll need to make sure we're querying enough to make the experience interesting, without keeping the app on the loading screen. 

We're using the 'posts' object in multiple ways, which means we're going to have to strategically filter information on both the front and back end.

### Brainstorming/Features
Notifications for messages, notifications for likes

How will people add locations?
* Google Places Web Services API --> closest 3 by radius
* Google Place Detail Request --> photos for location

-Notifications for messages
-Notifications for likes

How will people add locations?
Google Places Web Services API - search box
Google Place Detail Request --> photos for location


Won't store locations in backend, store location information in post and just use Google locations

Query all posts within a certain radius and use selectors to organize data by location

## Implementation Timeline

### Previously Accomplished
* Learn React Native
* Design app architecture
* Wireframes
* Mobile app UX research

__Sunday (Jun 4)__
**Objective:** Complete proposal and start auth
- [ ] Proposal
- [ ] Backend auth constructed

__Monday (Jun 5)__
**Objective:** Complete Auth and Backend
- [ ] Auth
- [ ] Host app on servers
- [ ] Backend 100% completed

__Tuesday (Jun 6)__
**Objective:** Redux Cycle, Make base React components
- [ ] Seed database
- [ ] API calls
- [ ] Thunk actions
- [ ] Actions
- [ ] Reducer
- [ ] Store

- [ ] NavContainer
- [ ] ContentContainer

__Wednesday (Jun 7)__
**Objective:** Work on components
- [ ] Feeds (Grey)
- [ ] New posts (Eric)
- [ ] Map (Nathan)
- [ ] Notifications (Monte)

__Thursday (Jun 8)__
**Objective:** Work on components
- [ ] Feeds (Grey)
- [ ] New posts (Eric)
- [ ] Map (Nathan)
- [ ] Notifications (Monte)

__Friday (Jun 9)__
**Objective:** Complete components
- [ ] Feeds (Grey)
- [ ] New posts (Eric)
- [ ] Map (Nathan)
- [ ] Notifications (Monte)


__Saturday (Jun 10)__
**Objective:** Styling / UX

__Sunday (Jun 11)__
**Objective:** Launch production app
- [ ] Production README
- [ ] Demo Site/Emulator
- [ ] Launched!
