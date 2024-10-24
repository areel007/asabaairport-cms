import Home from "../../../models/home.mjs";

export const newWhatWeDo = async (req, res) => {
  const { title, highlight, aviation, nonAviation, dedicatedServices } =
    req.body;

  try {
    const whatWeDo = new Home.WhatWeDo({
      title,
      highlight,
      aviation,
      nonAviation,
      dedicatedServices,
    });

    await whatWeDo.save();

    res.status(201).json({ message: "What We Do created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWhatWeDo = async (req, res) => {
  const { id } = req.params;
  try {
    const whatWeDo = await Home.WhatWeDo.findById(id);
    if (!whatWeDo) {
      return res.status(404).json({ message: "What We Do not found" });
    }
    res.status(200).json(whatWeDo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateWhatWeDo = async (req, res) => {
  const { id } = req.params;
  const { title, highlight, aviation, nonAviation, dedicatedServices } =
    req.body;
  try {
    const whatWeDo = await Home.WhatWeDo.findByIdAndUpdate(
      id,
      {
        title,
        highlight,
        aviation,
        nonAviation,
        dedicatedServices,
      },
      { new: true }
    );
    if (!whatWeDo) {
      return res.status(404).json({ message: "What We Do not found" });
    }
    res.status(200).json({
      message: "What We Do updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
