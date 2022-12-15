function setAllFatLines() {
  let fatLines = [];
  for (let i = 0; i <= 59; i += 5) {
    fatLines.push(i);
  }
  return fatLines;
}
console.log(setAllFatLines());
