import { model, Schema } from "mongoose";

const footerSchema = new Schema({
  about: {
    type: String,
    default: "",
  },
  telephone: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
});

const Footer = model("Footer", footerSchema);

export default Footer;
