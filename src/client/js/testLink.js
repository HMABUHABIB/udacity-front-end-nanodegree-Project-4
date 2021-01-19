let expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
var regex = new RegExp(expression);

function testLink(linkValue) {

 if (linkValue.match(regex)) {
  return true
 } else
  return false
}

export { testLink }