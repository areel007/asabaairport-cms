import AtTheAirport from "../../models/passengers/at-the-airport.mjs";

export const newAtTheAirport = async (req, res) => {
  const { image, chillout, freeWifi } = req.body;
  try {
    const atTheAirport = new AtTheAirport({
      image,
      chillout,
      freeWifi,
    });
    await atTheAirport.save();
    res.status(201).json(atTheAirport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAtTheAirport = async (req, res) => {
  const { id } = req.params;
  try {
    const atTheAirport = await AtTheAirport.findById(id);
    if (!atTheAirport) {
      return res.status(404).json({ message: "At The Airport not found" });
    }
    res.status(200).json(atTheAirport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAtTheAirport = async (req, res) => {
  const { id } = req.params;
  const { image, chillout, freeWifi } = req.body;
  try {
    const atTheAirport = await AtTheAirport.findByIdAndUpdate(
      id,
      {
        image,
        chillout,
        freeWifi,
      },
      { new: true }
    );
    if (!atTheAirport) {
      return res.status(404).json({ message: "At The Airport not found" });
    }
    res.status(200).json(atTheAirport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
