import { model, Schema } from "mongoose";

const passengersHomeHeroSchema = new Schema({
  heroOne: {
    text: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  heroTwo: {
    text: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  heroThree: {
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

const PassengersHomeHero = model(
  "PassengersHomeHero",
  passengersHomeHeroSchema
);

const travelExperienceSchema = new Schema({
  highlight: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  chillOut: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  wifi: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  covid: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
});

const TravelExperience = model("TravelExperience", travelExperienceSchema);

const experienceAsaba = new Schema({
  text: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});

const ExperienceAsaba = model("ExperienceAsaba", experienceAsaba);

export { PassengersHomeHero, TravelExperience, ExperienceAsaba };
