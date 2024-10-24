import { model, Schema } from "mongoose";

const aboutUsHistorySchema = new Schema({
  highlight: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});

const AboutUsHistory = model("AboutUsHistory", aboutUsHistorySchema);

const aboutUsVisionAndMissionSchema = new Schema({
  vision: {
    type: String,
    default: "",
  },
  mission: {
    type: String,
    default: "",
  },
  values: {
    type: String,
    default: "",
  },
});

const AboutUsVisionAndMission = model(
  "AboutUsVisionAndMission",
  aboutUsVisionAndMissionSchema
);

const aboutUsAboutAACSchema = new Schema({
  highlight: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});

const AboutUsAboutAAC = model("AboutUsAboutAAC", aboutUsAboutAACSchema);

export { AboutUsHistory, AboutUsVisionAndMission, AboutUsAboutAAC };
