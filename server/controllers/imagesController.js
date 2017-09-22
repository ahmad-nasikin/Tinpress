const Image = require ('../models/Image');


const createImage = function (req, res) {
  Image.create({
    imgURL: req.body.imgurl,
  })
  .then(() => {
    res.send({msg:`tambah gambar berhasil`})
  })
  .catch(err => {
    return res.status(400).send({msg: err.message})
  })
}

const getImages = function (req, res) {
  Image.find({})
  .then(images => res.send(images))
  .catch(err => res.send({msg: err.message}))
}

const removeImage = function (req, res) {
 Image.deleteOne({
   _id: req.params.id
 })
 .then(() => res.send({msg: 'image berhasil dihapus'}))
 .catch(err => res.send({msg: err.message}))
}

module.exports = {
  createImage,
  getImages,
  removeImage
}
