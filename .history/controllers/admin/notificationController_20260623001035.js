import Notification from "../../models/Admin/";

export const getNotifications =
  async (req, res) => {
    try {
      const notifications =
        await Notification.find()
          .sort({
            createdAt: -1,
          });

      res.json(notifications);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const createNotification =
  async (req, res) => {
    try {
      const notification =
        await Notification.create(
          req.body
        );

      res.status(201).json(
        notification
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const deleteNotification =
  async (req, res) => {
    try {
      await Notification.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Notification Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };