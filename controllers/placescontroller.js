const db = require('../config/dbindex');
const Place = db.Place;

exports.getAllPlaces = async(req,res) => {
 try{
    const places = await Place.findAll();
    console.log(places)
    res.status(200).send(places);
} catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured while fetching data" });
}
};

exports.postPlace = (req,res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
      };
    const place = {
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    };
    Place.create(place).then((place)=> {
     res.status(200).send(place);
    });
}
// Find One by Id
exports.FindOnePlacesById = (req, res) => {
  const id = req.params.id;

  Place.findByPk(id)
  .then(place => {
    if (place) {
      res.status(200).send(place);
    } else {
      res.status(400).send({message : "place not found"});
    }
  })
  .catch(error => {
    res.status(500).send('Error:', error);
  });

};


exports.updatePlace = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const id = req.params.id;
  Place.update(req.body, {
    where: { id: id }
  })
    .then(updatedRows => {
      if (updatedRows[0] === 0) {
        res.status(404).send({ message: `Place with ID ${id} not found` });
      } else {
        res.status(200).send({ message: 'Place updated successfully' });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send({ message: 'Error updating product' });
    });
};

exports.deleteOnePlace = (req, res) => {
  const id = req.params.id;
 
  Place.destroy({
    where: { id: id }
  })
    .then(deletedRows => {
      if (deletedRows === 0) {
        res.status(404).send({ message: `Place with ID ${id} not found` });
      } else {
        res.status(200).send({ message: `Place with ID ${id} deleted successfully` });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send({ message: 'Error deleting product' });
    });
};