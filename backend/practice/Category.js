const Category = require("../models/Category");

const categories = [
  {
    "_id": "65a7e24602e12c44f599442c",
    "name": "smartphones",
    "__v": 0,
    "img": "https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
  },
  {
    "_id": "65a7e24602e12c44f599442d",
    "name": "laptops",
    "__v": 0,
    "img": "https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100"
  },
  {
    "_id": "65a7e24602e12c44f599442e",
    "name": "fragrances",
    "__v": 0,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg09kgmZ78JeRoAj6lgUBnGWjVJqepovouRA&usqp=CAU"
  },
  {
    "_id": "65a7e24602e12c44f599442f",
    "name": "skincare",
    "__v": 0,
    "img": "data:image/jpeg;base64,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"
  },
  {
    "_id": "65a7e24602e12c44f5994430",
    "name": "groceries",
    "__v": 0,
    "img": "https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
  },
  {
    "_id": "65a7e24602e12c44f5994431",
    "name": "home & Furniture",
    "__v": 0,
    "img": "https://rukminim2.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100"
  },
  {
    "_id": "65a7e24602e12c44f599443a",
    "name": "womens-bags",
    "__v": 0,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47x8KDfYi0qhYPafqiUNuJaDSiFrqSz9i7Q&usqp=CAU"
  },
  {
    "_id": "65a7e24602e12c44f599443b",
    "name": "womens-jewellery",
    "__v": 0,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlAteEzbbtNsT9shbEjw8MrKFTEQzCRMCaQ&usqp=CAU"
  },
  {
    "_id": "65a7e24602e12c44f599443c",
    "name": "sunglasses",
    "__v": 0,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB16i277cf3FlVjcMOqC-qPm5ez0jV8nyejA&usqp=CAU"
  },
  {
    "_id": "65a7e24602e12c44f599443f",
    "name": "lighting",
    "__v": 0,
    "img": "data:image/jpeg;base64,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"
  },
  {
    "_id": "664edb3a72080a83b4785e38",
    "name": "fashion",
    "img": "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100"
  },
  {
    "_id": "664ee145378c952f1d59287e",
    "name": "watch",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFL__eQFNIGhSBEhzVSWt7aJIsEi995CAicQ&usqp=CAU"
  },
  {
    "_id": "65a7e24602e12c44f599443d",
    "name": "automotive"
  },
  {
    "_id": "65a7e24602e12c44f599443e",
    "name": "motorcycle"
  }
]

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};