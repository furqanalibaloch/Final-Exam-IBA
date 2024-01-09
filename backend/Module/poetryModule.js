const mongoose = require("mongoose")

const poetryModuleSchema = mongoose.Schema({
    
   
   
    tittle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    lines: {
        type: String,
        required: true,
        
    },
  

})

module.exports = mongoose.model("poetryModule",poetryModuleSchema)