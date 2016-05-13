# Pixel Art Maker

In this exercise, you'll create your own pixel art maker which lets you choose colors from a palette and then "paint" pixel art. The interface is completely up to you, but it could look something like this.

![Example of Pixel Art Maker](pixel-art-maker-alt.png)

A user should be able to:

1. Start with a blank canvas of "pixels"
1. Select a color from a palette
1. Paint the pixels on the canvas using the selected color

Here's a development workflow that we recommend you use.

1. Create a small, 2x2 grid canvas made up of white, square `div` tags with a border.
1. Add an event listener to each `div` so when clicked the background turns red.
1. Create a small palette of two colors (e.g. red and blue) below the canvas using more `div` tags.
1. Add an event listener to these `div` tags so when clicked the current "brush" color is stored in memory.
1. Expand the dimensions of the pixel canvas.
1. Expand the palette with the rest of the standard colors as well as an eraser. (Red, Orange, Yellow, Green, Blue, Purple, Black, Brown, White, etc.)

### **Bonus Challenges:**

* Color Palette: check out http://www.colors.commutercreative.com/grid/ for a list of all standard CSS colors
* Pencil tool: Add the ability to click and drag to draw pencil lines
* Selection tool: Add a tool which allows the user to drag across the screen and paint all pixels that fall inside the rectangular selection
* Add a color picker which allows the user to select any color. Look into HTML5 color inputs
