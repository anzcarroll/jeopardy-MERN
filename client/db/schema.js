var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var QuestionsSchema = new Schema ({
    value: Number,
    questions: String,
    answer: String
})

var CatergoriesSchema = new Schema ({
    name: String,
    questions: [QuestionsSchema]
})

var GameSchema = new Schema ({
    user: String,
    points: Number,
    board: [Boolean],
    catergories: [CatergorieSchema],
})

var QuestionsModel = mongoose.model("Questions", QuestionSchema);
var CatergoriesModel = mongoose.model("Categories", CategoriesSchema);
var GameModel = mongoose.model("Game", GameSchema);

module.exports = {
    Questions : QuestionModel,
    Categories: CategoriesModel,
    Game: GameModel
}