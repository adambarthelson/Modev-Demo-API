/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // e.g., "Polly"
    image: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    likes: {
      type: 'integer'
    },

    comments: {
      collection: 'Comment'
    }
  },

  seedData: [
    { likes: 0, image: 'img/arya.jpg', description: "Giving someone the stink face. #judging" },
    { likes: 0, image: 'img/jon-snow.jpg', description: "Not very happy with my friends. #drama" },
    { likes: 0, image: 'img/tyrion.jpg', description: "Father's Day always gets me down. #sadface" },
    { likes: 0, image: 'img/daenerys.jpg', description: "Having friends over for a BBQ. #summer" },
  ]
};
