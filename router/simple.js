const express=require("express")
const router =express.Router()

const upload=require("../multer/upload")

const {renderhomepage,imagesave,getImagePath}=require("../controller/simple")

router.get("/",renderhomepage)
router.get("/:filename",getImagePath)
router.post("/",upload.single("profileImage"),imagesave)

module.exports=router