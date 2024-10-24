import HomeHero from "../../../models/home.mjs";

export const newCorporateHero = (req, res) => {
  const { heroOne, heroTwo, heroThree } = req.body;
  const homeHero = new HomeHero.CorporateHomeHero({
    heroOne,
    heroTwo,
    heroThree,
  });
  homeHero
    .save()
    .then(() => {
      res.status(201).json({
        message: "Hero created successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
};

export const getCorporateHero = async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await HomeHero.CorporateHomeHero.findById(id);
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCorporateHero = async (req, res) => {
  const { id } = req.params;
  const { heroOne, heroTwo, heroThree } = req.body;
  try {
    const hero = await HomeHero.CorporateHomeHero.findByIdAndUpdate(
      id,
      {
        heroOne,
        heroTwo,
        heroThree,
      },
      { new: true }
    );
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    res.status(200).json({
      message: "Hero updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
