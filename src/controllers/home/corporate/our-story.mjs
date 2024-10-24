import Home from "../../../models/home.mjs";

export const newOurStory = async (req, res) => {
  const { text } = req.body;
  const home = new Home.OurStory({
    text,
  });
  try {
    await home.save();
    res.status(201).json({
      message: "Our Story created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOurStory = async (req, res) => {
  const { id } = req.params;
  try {
    const ourStory = await Home.OurStory.findById(id);
    if (!ourStory) {
      return res.status(404).json({ message: "Our Story not found" });
    }
    res.status(200).json(ourStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOurStory = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const ourStory = await Home.OurStory.findByIdAndUpdate(
      id,
      {
        text,
      },
      { new: true }
    );
    if (!ourStory) {
      return res.status(404).json({ message: "Our Story not found" });
    }
    res.status(200).json({
      message: "Our Story updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
