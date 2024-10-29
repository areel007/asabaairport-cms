import { model, Schema } from "mongoose";

const atTheAirportSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  chillout: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  freeWifi: {
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

const AtTheAirportSchema = model("AtTheAirport", atTheAirportSchema);

export default AtTheAirportSchema;
