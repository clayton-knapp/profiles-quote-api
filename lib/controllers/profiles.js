const { Router } = require('express');
const Profile = require('../models/Profile');
const fetch = require('cross-fetch');
// const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  // TODO: Implement me!
  const apiResponse = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const data = await apiResponse.json();
  // console.log(data);


  const profile = await Profile.insert({ ...req.body, quote: data[0].quote });

  // console.log('profile', profile);
  res.send(profile);


  // res.send({ id: '1', name: 'Test User', quote: ' some quote' });
});
