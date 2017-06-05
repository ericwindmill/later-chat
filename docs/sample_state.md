```javascript
{
  currentUser: {
    id: 1,
    location: {
      lat: -37.28384,
      lng: -23.49023
    }
    followers: [user1_id, user2_id],
    leaders: [user7_id, user3_id]
  },

  nearbyLocations: {
    1: 'Dolores Park',
    2: 'McDonalds'
  },

  posts: {
      'Dolores Park' : [
          {
            id: 1,
            body: "Check out this cool place!",
            image_url: "https://aws.amazon.com/",
            author_id: 3
          },
          {
            id: 2,
            body: "Hey, John. I left this note for you",
            public: false,
            author_id: 7
          }
        ],
      'McDonalds' : [
        {
          id: 5,
          body: "Check out this cool place!",
          image_url: "https://aws.amazon.com/",
          author_id: 3
        },
        {
          id: 46,
          body: "Bananas",
          img_url: ''
          author_id: 7
        }
      ]
    }
  }

  notes: {
    'Dolores Park' : [
        {
          id: 8,
          body: "Check out this cool place!",
          image_url: "https://aws.amazon.com/",
          read: false,
          author_id: 3
        },
        {
          id: 2,
          body: "Hey, John. I left this note for you",
          img_url: '',
          read: false,
          author_id: 7
        }
      ],
    'McDonalds' : [
      {
        id: 6,
        body: "Check out this cool place!",
        image_url: "https://aws.amazon.com/",
        read: true,
        author_id: 3,
      },
      {
        id: 9,
        body: "Bananas",
        img_url: '',
        read: true
        author_id: 7,
      }
    ]
  },

  errors : []

}
```
