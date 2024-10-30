import {ExperienceAsabaPage} from "../../models/passengers/experience-asaba.mjs";

export const newExperienceAsaba = async (req, res) => {
  const { image, title, description, content } = req.body;
  try {
    const experienceAsaba = new ExperienceAsabaPage({
      image,
      title,
      description,
      content,
    });
    await experienceAsaba.save();
    res.status(201).json({
      message: "Experience created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExperienceAsaba = async (req, res) => {
  const { id } = req.params;
  try {
    const experienceAsaba = await ExperienceAsabaPage.findById(id);
    if (!experienceAsaba) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json(experienceAsaba);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExperienceAsaba = async (req, res) => {
  const { id } = req.params;
  const { image, title, description, content } = req.body;
  try {
    const experienceAsaba = await ExperienceAsabaPage.findByIdAndUpdate(
      id,
      {
        image,
        title,
        description,
        content,
      },
      { new: true }
    );
    if (!experienceAsaba) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.status(200).json({
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
