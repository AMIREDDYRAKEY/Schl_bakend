import Timetable from "../../models/Admin/

export const getTimetable =
  async (req, res) => {
    const data =
      await Timetable.find();

    res.json(data);
  };

export const createTimetable =
  async (req, res) => {
    const timetable =
      await Timetable.create(
        req.body
      );

    res.status(201).json(
      timetable
    );
  };

export const deleteTimetable =
  async (req, res) => {
    await Timetable.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Deleted Successfully",
    });
  };