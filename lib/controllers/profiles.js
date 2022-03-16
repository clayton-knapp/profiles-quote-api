const { Router } = require('express');
// const Profile = require('../models/Profile');
// const fetch = require('cross-fetch');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  // TODO: Implement me!

  const profile = await ProfileService.create(req.body);

  // console.log('profile in controller', profile);
  res.send(profile); //send back to front end?

});
