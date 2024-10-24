import { AboutUsHistory } from "../../models/about-us.mjs";

export const newHistory = async (req, res) => {
  const { highlight, content } = req.body;

  try {
    const history = new AboutUsHistory({
      highlight,
      content,
    });
    await history.save();
    res.status(201).json({
      message: "History created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHistory = async (req, res) => {
  const { id } = req.params;
  try {
    const history = await AboutUsHistory.findById(id);
    if (!history) {
      return res.status(404).json({ message: "History not found" });
    }
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHistory = async (req, res) => {
  const { id } = req.params;
  const { highlight, content } = req.body;
  try {
    const history = await AboutUsHistory.findByIdAndUpdate(
      id,
      {
        highlight,
        content,
      },
      { new: true }
    );
    if (!history) {
      return res.status(404).json({ message: "History not found" });
    }
    res.status(200).json({
      message: "History updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
