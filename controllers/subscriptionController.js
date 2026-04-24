import Subscription from "../models/Subscription.js";

// crear suscripción
export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Subscription.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    const newSub = new Subscription({ email });
    await newSub.save();

    res.status(201).json({ message: "Suscripción guardada" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// obtener todas las suscripciones
export const getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  eliminar suscripción
export const deleteSubscription = async (req, res) => {
  try {
    await Subscription.findByIdAndDelete(req.params.id);
    res.json({ message: "Suscripción eliminada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};