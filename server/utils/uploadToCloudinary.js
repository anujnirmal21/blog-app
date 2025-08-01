import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = async (image) => {
  const result = await cloudinary.uploader.upload(image, {
    folder: "blogs",
  });

  return result.secure_url;
};
