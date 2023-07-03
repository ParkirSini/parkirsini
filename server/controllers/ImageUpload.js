class ImageUpload {
   static async upload(req, res, next) {
      console.log(req.files)
   }
}

module.exports = ImageUpload