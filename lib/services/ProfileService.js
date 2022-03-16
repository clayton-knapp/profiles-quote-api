const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

//handles adding the username from our request/controller and hits the 3rd part API to add the quote and then sends to Model

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!

    const apiResponse = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const data = await apiResponse.json();
    const quote = data[0].quote;
    // console.log(data);

    const profile = await Profile.insert({ 
      name, 
      quote, 
    });

    // console.log('profile in service', profile);

    return profile; // this returns the profile back to the controller who called it

  }
};
