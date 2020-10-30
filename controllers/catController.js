'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const get_cat_by_id = async (req, res) => {
  const cat = await catModel.getCat(req.params.id)
  res.json(cat)
}

const cat_create = async (req, res) => {
  console.log(req.body, req.file)
  const id = await catModel.insertCat(req)
  const cat = await catModel.getCat(id)
  res.send(cat)
}

const cat_update = async (req, res) => {
  const updateOk = await catModel.updateCat(req.params.id, req)
  res.send(`updated... ${updateOk}`)
}

const cat_delete = async (req, res) => {
  res.send("deleted...")
}

module.exports = {
  cat_list_get,
  get_cat_by_id,
  cat_create,
  cat_update,
  cat_delete
};