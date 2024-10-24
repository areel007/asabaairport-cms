import { AboutUsVisionAndMission } from "../../models/about-us.mjs";

export const newVisionAndMission = async (req, res) => {
  const { vision, mission, values } = req.body;
  try {
    const visionAndMission = new AboutUsVisionAndMission({
      vision,
      mission,
      values,
    });
    await visionAndMission.save();
    res.status(201).json({
      message: "Vision and Mission created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVisionAndMission = async (req, res) => {
  const { id } = req.params;
  try {
    const visionAndMission = await AboutUsVisionAndMission.findById(id);
    if (!visionAndMission) {
      return res.status(404).json({ message: "Vision and Mission not found" });
    }
    res.status(200).json(visionAndMission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateVisionAndMission = async (req, res) => {
  const { id } = req.params;
  const { vision, mission, values } = req.body;
  try {
    const visionAndMission = await AboutUsVisionAndMission.findByIdAndUpdate(
      id,
      {
        vision,
        mission,
        values,
      },
      { new: true }
    );
    if (!visionAndMission) {
      return res.status(404).json({ message: "Vision and Mission not found" });
    }
    res.status(200).json({
      message: "Vision and Mission updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
