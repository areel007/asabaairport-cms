import { model, Schema } from "mongoose";

// corporate
// corporate hero
const corporateHomeHeroSchema = new Schema({
  heroOne: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  heroTwo: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  heroThree: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
});

const CorporateHomeHero = model("CorporateHomeHero", corporateHomeHeroSchema);

// our story
const ourStorySchema = new Schema({
  text: {
    type: String,
    default: "",
  },
});

const OurStory = model("OurStory", ourStorySchema);

// what we do
const whatWeDoSchema = new Schema({
  title: {
    type: String,
    default: "",
  },
  highlight: {
    type: String,
    default: "",
  },
  aviation: {
    text: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  nonAviation: {
    text: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  dedicatedServices: {
    text: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
});

const WhatWeDo = model("WhatWeDo", whatWeDoSchema);

//passengers
// passengers hero
const passengersHomeHeroSchema = new Schema({
  heroOne: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  heroTwo: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  heroThree: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
});

const PassengersHomeHero = model(
  "PassengersHomeHero",
  passengersHomeHeroSchema
);

// export models
export default { CorporateHomeHero, PassengersHomeHero, OurStory, WhatWeDo };
