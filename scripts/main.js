let mouse_pressed = false;



window.addEventListener ("mousedown", e => {
  mouse_pressed = true;
});
window.addEventListener ("mouseup", e => {
  mouse_pressed = false;
});


class SketchState {
  constructor (width) {
    document.querySelector(".main-container").remove();
    let main_container = document.createElement("div");
    main_container.classList = "main-container";
    for (let i = 0; i < width*width; i++) {
      let square = document.createElement("div");
      square.classList = "square";
      square.style.width = 960/width + "px";
      square.style.height = 960/width + "px";
      square.addEventListener("mouseover", (e) => {
        if (mouse_pressed) {

          square.style.backgroundColor = document.querySelector(".color-picker").value;
        }
      });
      square.addEventListener("mousedown", (e) => {
        square.style.backgroundColor = document.querySelector(".color-picker").value;
      });
      main_container.appendChild(square);
    }
    document.body.appendChild(main_container);
  }
  clear () {
    for (let square of document.querySelector(".main-container").children) {
      square.style.backgroundColor = "#f2f2f2";
    }
  }
  new (width) {
    return new SketchState (width);
  }

}
let startingSketch = new SketchState(16)

let clear_button = document.querySelector(".clear-button")
clear_button.addEventListener("click", (e) => {
  startingSketch.clear();
});

let new_button = document.querySelector(".new-button")
new_button.addEventListener("click", (e) => {
  let new_width = parseInt(prompt("Width of the new etch a sketch: "));
  startingSketch.new(new_width);
})
