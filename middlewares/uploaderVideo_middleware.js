const cloudinary = require('cloudinary').v2;
const multer = require('multer');
require('dotenv').config();
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.COUDINARY_SECRET_KEY
});

// Create a storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Folder name in Cloudinary where the uploaded files will be stored
    allowed_formats: ['mp4'], // Allowed file formats
    resource_type: 'video', // Specify resource type as 'video'
    // Optional transformations
  }
});

// Create Multer instance
const multerUpload = multer({ storage: storage });

// Middleware function for video uploading
// Middleware function for video uploading
const uploadVideoMiddleware = (req, res, next) => {
  console.log("secret:",process.env.COUDINARY_SECRET_KEY);
  multerUpload.single('video')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // Multer error occurred (e.g., file size limit exceeded)
      console.log("Multer error:", err);
      return res.status(400).json({ error: err.message });
    } else if (err) {
      // Other error occurred
      console.log("Other error:", err);
      return res.status(500).json({ error: err.message });
    }
    // File uploaded successfully
    next();
  });
};


module.exports = { uploadVideoMiddleware };
