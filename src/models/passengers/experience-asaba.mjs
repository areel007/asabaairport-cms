import { model, Schema } from "mongoose";

const experienceAsabaSchema = new Schema({
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
  content: {
    type: String,
    default: "",
  },
});

const ExperienceAsaba = model("ExperienceAsaba", experienceAsabaSchema);

export default ExperienceAsaba;
