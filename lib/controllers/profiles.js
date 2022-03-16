const { Router } = require('express');
// const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  // TODO: Implement me!
  res.send({ id: '1', name: 'Test User', quote: ' some quote' });
});
