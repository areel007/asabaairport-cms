import OurBusiness from "../models/our-business.mjs";

export const newOurBusiness = async (req, res) => {
  const {
    title,
    highlight,
    description,
    aviation,
    nonAviation,
    dedicatedServices,
    advertising,
  } = req.body;
  const ourBusiness = new OurBusiness({
    title,
    highlight,
    description,
    aviation,
    nonAviation,
    dedicatedServices,
    advertising,
  });
  try {
    await ourBusiness.save();
    res.status(201).json({
      message: "Our Business created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOurBusiness = async (req, res) => {
  const { id } = req.params;
  try {
    const ourBusiness = await OurBusiness.findById(id);
    if (!ourBusiness) {
      return res.status(404).json({ message: "Our Business not found" });
    }
    res.status(200).json(ourBusiness);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOurBusiness = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    highlight,
    description,
    aviation,
    nonAviation,
    dedicatedServices,
    advertising,
  } = req.body;
  try {
    const ourBusiness = await OurBusiness.findByIdAndUpdate(
      id,
      {
        title,
        highlight,
        description,
        aviation,
        nonAviation,
        dedicatedServices,
        advertising,
      },
      { new: true }
    );
    if (!ourBusiness) {
      return res.status(404).json({ message: "Our Business not found" });
    }
    res.status(200).json({
      message: "Our Business updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
