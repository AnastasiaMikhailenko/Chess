function readFile(object) {
  let file = object.files[0]
  let reader = new FileReader()
  let myfile

  reader.readAsText(file)
  reader.onload = function() {
    myfile = reader.result
    const Array = myfile.split(' ')
    let step = 0
    document.getElementById('button').onclick = handleChange = () => {
    const double = Array[step].split("-")
    console.log(document.getElementById(double[1]).innerHTML)
    document.getElementById(double[1]).innerHTML =  document.getElementById(double[0]).innerHTML
    document.getElementById(double[0]).innerHTML = ""
    step++
    }
  }
}




