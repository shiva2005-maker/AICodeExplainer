const Explanation = require('../Models/ExplanationModel')
const explainCode = require("../services/aiService")

const explain = async (req,res)=>{

  const {code,language} = req.body

  const explanation = await explainCode(code)

  const saved = await Explanation.create({
    code,
    language,
    explanation
  })

  res.json(saved)
}

module.exports = {explain}