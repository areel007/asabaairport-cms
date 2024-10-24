import { AboutUsAboutAAC } from "../../models/about-us.mjs";

export const newAboutUsAboutAAC = async (req, res) => {
  const { highlight, content } = req.body;
  try {
    const aboutUsAboutAAC = new AboutUsAboutAAC({
      highlight,
      content,
    });
    await aboutUsAboutAAC.save();
    res.status(201).json({
      message: "About Us About AAC created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAboutUsAboutAAC = async (req, res) => {
  const { id } = req.params;
  try {
    const aboutUsAboutAAC = await AboutUsAboutAAC.findById(id);
    if (!aboutUsAboutAAC) {
      return res.status(404).json({ message: "About Us About AAC not found" });
    }
    res.status(200).json(aboutUsAboutAAC);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAboutUsAboutAAC = async (req, res) => {
  const { id } = req.params;
  const { highlight, content } = req.body;
  try {
    const aboutUsAboutAAC = await AboutUsAboutAAC.findByIdAndUpdate(
      id,
      {
        highlight,
        content,
      },
      { new: true }
    );
    if (!aboutUsAboutAAC) {
      return res.status(404).json({ message: "About Us About AAC not found" });
    }
    res.status(200).json({
      message: "About Us About AAC updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
