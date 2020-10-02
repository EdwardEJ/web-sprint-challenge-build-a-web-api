const express = require('express');
const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/projectModel');
const router = express.Router();

router.post('/', (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

router.get('/:id/actions', (req, res) => {
  Actions.getProjectActions(req.params.id)
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
  Projects.update(id, changes)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

router.delete('/:id', (req, res) => {
  Projects.remove(req.params.id)
    .then((project) => {
      res.status(204).json(project);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: err });
    });
});

module.exports = router;
