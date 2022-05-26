export const postService = {
    query,
}


const POSTS = [
    {
    "_id": "s101",
    "txt": "Worst trip EVERRRRR",
    "imgUrl": "https://www.traveller.com.au/content/dam/images/h/1/r/j/i/p/image.related.articleLeadwide.620x349.h1rji0.png/1603229049811.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": 123543452,
    "by": {
      "_id": "u101",
      "fullname": "Ulash Ulashi",
      "imgUrl": "https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg"
    },
    "loc": {
      "lat": 11.11,
      "lng": 22.22,
      "name": "Tel Aviv"
    },
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
          }
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Dob",
          "imgUrl": "http://some-img"
        },
        "txt": "not good!",
      }
    ],
    "likedBy": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "tags":["fun", "kids"]
  },
    {
    "_id": "s102",
    "txt": "Best trip ever",
    "imgUrl": "https://www.ourescapeclause.com/wp-content/uploads/2020/03/shutterstock_1006657309-scaled.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": 123543452,
    "by": {
      "_id": "u101",
      "fullname": "Ulash Ulashi",
      "imgUrl": "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png"
    },
    "loc": {
      "lat": 11.11,
      "lng": 22.22,
      "name": "Tel Aviv"
    },
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
          }
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Dob",
          "imgUrl": "http://some-img"
        },
        "txt": "not good!",
      }
    ],
    "likedBy": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "tags":["fun", "kids"]
},
]

function query() {
    return POSTS
}
