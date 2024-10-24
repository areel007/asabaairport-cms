import { model, Schema } from "mongoose";

const ourBusinessSchema = new Schema({
  title: {
    type: String,
    default: "",
  },
  highlight: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  aviation: {
    image: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  nonAviation: {
    image: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  dedicatedServices: {
    image: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  advertising: {
    image: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
});

const OurBusiness = model("OurBusiness", ourBusinessSchema);

export default OurBusiness;
