// mongoose schema for Model of Node js Express js MVC Architecture
const mongoose = require('mongoose');

// schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    default: 'A wonderful vacation tour',
    required: [true, 'A tour must have a description'],
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});

// Virtual model schema are not fetched from the database. They are obtained by transforming schema actually obtained from the database. Hence virtual schema cannot be added to toute query parameters
// eg. obtaining distance in miles from kilometers
tourSchema.virtual('durationWeeks').get(
  function () {
    return this.duration / 7;
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// call model
const Tour = mongoose.model('Tour', tourSchema);

// const testTour = new Tour({
//   name: 'Ninja Monk',
//   price: 101,
//   rating: 4.0,
// });

// testTour
//   .save()
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));

// default exxport
module.exports = Tour;
