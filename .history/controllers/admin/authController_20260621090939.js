import Admin from "../../models/Admin/Admin.js";
import bcrypt from "bcryptjs";
import generateToken from "../../utils/";

export const registerAdmin =
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
      } = req.body;

      const adminExists =
        await Admin.findOne({
          email,
        });

      if (adminExists) {
        return res.status(400).json({
          message:
            "Admin Already Exists",
        });
      }

      const salt =
        await bcrypt.genSalt(10);

      const hashedPassword =
        await bcrypt.hash(
          password,
          salt
        );

      const admin =
        await Admin.create({
          name,
          email,
          password:
            hashedPassword,
        });

      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token:
          generateToken(
            admin._id
          ),
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

export const loginAdmin =
  async (req, res) => {
    try {
      const {
        email,
        password,
      } = req.body;

      const admin =
        await Admin.findOne({
          email,
        });

      if (
        admin &&
        (await bcrypt.compare(
          password,
          admin.password
        ))
      ) {
        res.json({
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          token:
            generateToken(
              admin._id
            ),
        });
      } else {
        res.status(401).json({
          message:
            "Invalid Credentials",
        });
      }
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };