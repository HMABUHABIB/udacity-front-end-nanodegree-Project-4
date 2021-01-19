import { generateTable } from "../src/client/js/generateTable"

describe('check The Table', () => {
 test('Testing URL aaa', () => {
  let data = {
   "sentence_list": [
    {
     "text": "Samer",
     "confidence": "100",
     "score_tag": "NONE",
     "agreement": "AGREEMENT",
    }]
  }
  expect(generateTable(data)).toBe(`<table style="width:100%"><tr><th colspan="5" style="text-align: center;">Sentence list Table</th></tr><tr><th>Nr</th><th>Text</th><th>Confidence</th><th>Score tag</th><th>Agreement</th></tr><tr><th>1</th><th>Samer</th><th>100</th><th>NONE</th><th>AGREEMENT</th></tr></table>`)
 })

})