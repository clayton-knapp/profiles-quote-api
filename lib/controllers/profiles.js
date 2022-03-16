const { Router } = require('express');
const Profile = require('../models/Profile');
// const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  // TODO: Implement me!
  const profile = await Profile.insert({ ...req.body, quote: 'whatever' });

  // console.log('profile', profile);
  res.send(profile);


  // res.send({ id: '1', name: 'Test User', quote: ' some quote' });
});
