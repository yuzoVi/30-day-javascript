

function pressionarTecla(event) {
  var x = event.keyCode;
  const clap = document.getElementById("A")
  const hithat = document.getElementById("S")
  const kick = document.getElementById("D")
  const openhat = document.getElementById("F")
  const boom = document.getElementById("G")
  const ride = document.getElementById("H")
  const snare = document.getElementById("J")
  const tom = document.getElementById("K")
  const tink = document.getElementById("L")

  const clapSound = document.getElementById("clapSound")
  const hithatSound= document.getElementById("hithatSound")
  const kickSound = document.getElementById("kickSound")
  const openhatSound= document.getElementById("openhatSound")
  const boomSound = document.getElementById("boomSound")
  const rideSound = document.getElementById("rideSound")
  const snareSound = document.getElementById("snareSound")
  const tomSound = document.getElementById("tomSound")
  const tinkSound = document.getElementById("tinkSound")
  

  switch (x) {
    case 65:
      clap.classList.add("amarelo")
      clapSound.currentTime = 0;
      clapSound.play()
      break

    case 83:
      hithat.classList.add("amarelo")
      hithatSound.play()
      break

    case 68:
      kick.classList.add("amarelo")
      kickSound.play()
      break

    case 70:
      openhat.classList.add("amarelo")
      openhatSound.play()
      break

    case 71:
      boom.classList.add("amarelo")
      boomSound.play()
      break

    case 72:
      ride.classList.add("amarelo")
      rideSound.play()
      break

    case 74:
      snare.classList.add("amarelo")
      snareSound.play()
      break

    case 75:
      tom.classList.add("amarelo")
      tomSound.play()
      break

    case 76:
      tink.classList.add("amarelo")
      tinkSound.play()
      break

  }
}

function retornarTecla(event) {
  var y = event.keyCode
  const clap = document.getElementById("A")
  const hithat = document.getElementById("S")
  const kick = document.getElementById("D")
  const openhat = document.getElementById("F")
  const boom = document.getElementById("G")
  const ride = document.getElementById("H")
  const snare = document.getElementById("J")
  const tom = document.getElementById("K")
  const tink = document.getElementById("L")
  switch (y) {
    case 65:
      clap.classList.remove("amarelo")
      break

    case 83:
      hithat.classList.remove("amarelo")
      break

    case 68:
      kick.classList.remove("amarelo")
      break

    case 70:
      openhat.classList.remove("amarelo")
      break

    case 71:
      boom.classList.remove("amarelo")
      break

    case 72:
      ride.classList.remove("amarelo")
      break

    case 74:
      snare.classList.remove("amarelo")
      break

    case 75:
      tom.classList.remove("amarelo")
      break

    case 76:
      tink.classList.remove("amarelo")

  }
}








