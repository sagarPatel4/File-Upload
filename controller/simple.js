const File = require("../model/file")

async function renderhomepage(req, res) {

    const allPath = await File.find({})
    return res.render("homepage", { paths: allPath, });

}
async function getImagePath(req, res) {

    try {
        const img = await File.findOne({ filename: req.params.filename })
        if (!img) {
            return res.status(404).send('Image not found')
        }
        console.log(`/upload/${img.filename}`);
        
        res.render('image', { imgPath: `/upload/${img.filename}` });
    } catch (err) {
        res.status(500).send('Server Error');
    }

}

async function imagesave(req, res) {
    try {
        const file = req.file;

        // Save file metadata to MongoDB
        const fileData = new File({
            filename: file.filename,
            originalName: file.originalname,
            filePath: file.path,
            size: file.size,
            mimetype: file.mimetype,
        });

        await fileData.save();

        res.status(200).json({
            message: 'File uploaded and metadata saved',
            file: fileData,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
module.exports = { renderhomepage, imagesave, getImagePath }