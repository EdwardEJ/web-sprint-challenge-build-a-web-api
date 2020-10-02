const express = require('express');
const Actions = require('../data/helpers/actionModel');
const router = express.Router();

router.post('/', (req, res) => {
  Actions.insert(req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

router.get('/:id', (req, res) => {
  Actions.get(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Actions.update(id, changes)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

router.delete('/:id', (req, res) => {
  Actions.remove(req.params.id)
    .then((action) => {
      res.status(204).json(action);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

module.exports = router;
