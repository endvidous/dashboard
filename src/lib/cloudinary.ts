import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

// Function to upload image to Cloudinary
export const uploadImage = async (
  file: File,
  folder: string
): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const buffer = Buffer.from(await file.arrayBuffer()); // Convert File to Buffer

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        transformation: [
          { quality: "auto", fetch_format: "auto" }, // Optimize quality and format
        ],
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result?.secure_url || "");
        }
      }
    );

    const readableStream = Readable.from(buffer); // Convert Buffer to Readable Stream
    readableStream.pipe(uploadStream);
  });
};
