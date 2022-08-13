import { getPublicImage } from "./flicker.source.js";

// Get data controller
const getData = async (req, res, next) => {
  try {
    const queryParams = req.queryParams

    // get the data from source
    const dataSource = await getPublicImage(queryParams);

    res.status(200).json({
      message: "success",
      data: dataSource,
    });
  } catch (error) {
    next(error);
  }
};

export { getData };
