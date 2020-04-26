class SketchState {
  constructor (width) {
    for (let i = 0; i < width*width; i++) {
      let square = document.createElement("div");
      square.classList += "square";
      square.style.width = 960/width + "px";
      square.style.height = 960/width + "px";
      document.querySelector(".main-container").appendChild(square);
    }
  }

}

let newSketch = new SketchState(96)
