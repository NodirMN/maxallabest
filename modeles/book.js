const {Schema,model} = require('mongoose')

const book = new Schema({
    namem:String,
    name: {
        type: String,
        required: true
    },
    img:String,
    adress: String,
    names:String,
    year: String,
    count: {
        type: String,
        required: true
    },
    mat:String,
    page: String,
    work:String,
    counts: String,
    genreId: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },
    child: String,
    tel:Number,
    marrid: String,
    typem: String,
    yearmar: String,
    father: String,
    typef: String,
    yearfat: String,
    mather: String,
    typema: String,
    yearmat: String,
    text: String,
    yearmar:String,
    

})


module.exports = model('Book', book)