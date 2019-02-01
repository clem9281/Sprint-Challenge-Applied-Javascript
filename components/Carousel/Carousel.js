class Carousel {
  constructor(element) {
    this.element = element;
    this.leftButton = this.element.querySelector(".left-button");
    this.rightButton = this.element.querySelector(".right-button");
    this.imgElements = this.element.querySelectorAll("img");
    this.index = 0;
    this.maxIndex = this.imgElements.length - 1;
    // I positioned all the elements off the the side, I want them to slide later, not appear, so I'm not using their display property. This puts the first image in the frame, so there is something there when the page loads.
    this.imgElements[0].style.right = "0";
    this.leftButton.addEventListener("click", event => {
      event.stopPropagation();
      this.slideLeft();
    });
    this.rightButton.addEventListener("click", event => {
      event.stopPropagation();
      this.slideRight();
    });
  }
  slideLeft() {
    let activeElement = this.imgElements[this.index];
    // if this index is already the highest index, loop back to zero, otherwise increment once
    let nextIndex = this.index === this.maxIndex ? 0 : this.index + 1;
    let nextElement = this.imgElements[nextIndex];
    // using tween from to in order to control where it looks like the images are coming from
    TweenMax.fromTo(activeElement, 1, { right: 0 }, { right: "100%" });
    TweenMax.fromTo(nextElement, 1, { right: "-100%" }, { right: 0 });
    this.index = nextIndex;
  }
  slideRight() {
    let activeElement = this.imgElements[this.index];
    let nextIndex = this.index === 0 ? this.maxIndex : this.index - 1;
    console.log(this.index, nextIndex);
    let nextElement = this.imgElements[nextIndex];
    console.log(nextElement);
    TweenMax.fromTo(activeElement, 1, { right: 0 }, { right: "-100%" });
    TweenMax.fromTo(nextElement, 1, { right: "100%" }, { right: 0 });
    this.index = nextIndex;
  }
}

let carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
