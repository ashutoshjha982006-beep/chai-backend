import multer from "multer";

//Isme client se aayi request ki information hoti hai.(req)
//file → Uploaded file ki information
//cb="Bhai, is file ko accept karna hai ya reject?"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

export const upload = multer({ storage, })