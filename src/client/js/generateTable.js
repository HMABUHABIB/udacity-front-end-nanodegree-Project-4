

function generateTable(results) {
  //console.log(results);
  let tableContenet = `<tr><th colspan="5" style="text-align: center;">Sentence list Table</th></tr><tr><th>Nr</th><th>Text</th><th>Confidence</th><th>Score tag</th><th>Agreement</th></tr>`
  for (let i = 0; i < results.sentence_list.length; i++) {
    tableContenet = tableContenet + `<tr><th>${i + 1}</th><th>${results.sentence_list[i].text}</th><th>${results.sentence_list[i].confidence}</th><th>${results.sentence_list[i].score_tag}</th><th>${results.sentence_list[i].agreement}</th></tr>`
  }
  return `<table style="width:100%">${tableContenet}</table>`

}

export { generateTable }
