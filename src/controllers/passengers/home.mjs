import {
  ExperienceAsaba,
  PassengersHomeHero,
  TravelExperience,
} from "../../models/passengers/home.mjs";

export const newPassengersHomeHero = async (req, res) => {
  const { heroOne, heroTwo, heroThree } = req.body;
  const passengersHomeHero = new PassengersHomeHero({
    heroOne,
    heroTwo,
    heroThree,
  });
  passengersHomeHero
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

export const getPassengersHomeHero = async (req, res) => {
  const { id } = req.params;
  try {
    const hero = await PassengersHomeHero.findById(id);
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePassengersHomeHero = async (req, res) => {
  const { id } = req.params;
  const { heroOne, heroTwo, heroThree } = req.body;
  try {
    const hero = await PassengersHomeHero.findByIdAndUpdate(
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

// a better travel experience
export const newTravelExperience = async (req, res) => {
  const { highlight, image, chillOut, wifi, covid } = req.body;
  try {
    const travelExperience = new TravelExperience({
      highlight,
      chillOut,
      wifi,
      covid,
      image,
    });
    await travelExperience.save();
    res.status(201).json({
      message: "Travel Experience created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTravelExperience = async (req, res) => {
  const { id } = req.params;
  try {
    const travelExperience = await TravelExperience.findById(id);
    if (!travelExperience) {
      return res.status(404).json({ message: "Travel Experience not found" });
    }
    res.status(200).json(travelExperience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTravelExperience = async (req, res) => {
  const { id } = req.params;
  const { highlight, chillOut, wifi, covid, image } = req.body;
  try {
    const travelExperience = await TravelExperience.findByIdAndUpdate(
      id,
      {
        highlight,
        chillOut,
        wifi,
        covid,
        image,
      },
      { new: true }
    );
    if (!travelExperience) {
      return res.status(404).json({ message: "Travel Experience not found" });
    }
    res.status(200).json({
      message: "Travel Experience updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newExperienceAsaba = async (req, res) => {
  const { text, image } = req.body;
  try {
    const experienceAsaba = new ExperienceAsaba({
      text,
      image,
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
    const experienceAsaba = await ExperienceAsaba.findById(id);
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
  const { text, image } = req.body;
  try {
    const experienceAsaba = await ExperienceAsaba.findByIdAndUpdate(
      id,
      {
        text,
        image,
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
