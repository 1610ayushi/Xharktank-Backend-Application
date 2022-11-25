const express = require("express");

// import models
const PitchModel = require("../schema/pitch");
const OfferModel = require("../schema/offer");

const Router = express.Router();

Router.post("/", async (req, res) => {
  try {
    const { entrepreneur, pitchTitle, pitchIdea, askAmount, equity } = req.body;

    const createdPitch = await PitchModel.create({
      entrepreneur,
      pitchTitle,
      pitchIdea,
      askAmount,
      equity,
    });

    return res.status(201).json({ id: createdPitch._id });
  } catch (error) {
    return res.status(400).send("Invalid Request Body");
  }
});

Router.post("/:id/makeOffer", async (req, res) => {
  try {
    const { investor, amount, equity, comment } = req.body;
    const { id } = req.params;

    // if(!investor || !amount || !equity || !comment){
    //   return res.status(400);
    // }

    const createdOffer = await OfferModel.create({
      investor,
      amount,
      equity,
      comment,
    });

    const updatedPitch = await PitchModel.findByIdAndUpdate(
      id,
      {
        $push: { offers: createdOffer._id },
      },
      { new: true }
    );

    if (!updatedPitch) {
      return res.status(404).send("Pitch Not Found");
    }

    return res.status(201).json({ id: createdOffer._id });
  } catch (error) {
    return res.status(400).send("Invalid Request Body");
  }
});

Router.get("/", async (req, res) => {
  try {
    const data = await PitchModel.find()
      .sort({ "createdAt": -1 })
      .populate("offers");

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Internal Server Error");
  }
});

Router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await PitchModel.findById(id).populate("offers");

    if (!data) {
      return res.status(404).send("Pitch Not Found");
    }

    const dto = {
      id: id,
      entrepreneur: data._doc.entrepreneur,
      pitchTitle: data._doc.pitchTitle,
      pitchIdea: data._doc.pitchIdea,
      askAmount: data._doc.askAmount,
      equity: data._doc.equity,
      offers: data._doc.offers,
    };

    return res.status(200).json(dto);
  } catch (error) {
    return res.status(400).send("Internal Server Error");
  }
});

module.exports = Router;
