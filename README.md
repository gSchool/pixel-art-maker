# Pixel Art Maker

In this exercise, you'll create your own pixel art maker which allows a user choose colors from a palette and then "paint" pixel art. The interface is completely up to you, but it could look something like this.

![Example of Pixel Art Maker](pixel-art-maker-alt.png)

More specifically, your pixel art maker should allow a user to do the following.

1. Start with a blank canvas of "pixels".
1. Select a color from a palette.
1. Paint the pixels on the canvas using the selected color.

Here's a development workflow that we recommend you use.

1. Create a small, 2x2 grid canvas made up of white, square `div` tags with a border.
1. Add an event listener to each `div` so when clicked the background turns red.
1. Create a small palette of two colors (e.g. red and blue) below the canvas using more `div` tags.
1. Add an event listener to these `div` tags so when clicked the current "brush" color is remembered.
1. Expand the dimensions of the pixel canvas.
1. Expand the palette with the rest of the standard colors as well as an eraser. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
1. Improve the look and feel of the canvas and color palette. Be careful not to break your code!

**TIP:** Check out [this handy tool](http://www.colors.commutercreative.com/grid/) to see a list of all the named colors in CSS.

### Bonus 1

Add tools that augment the type of user interaction

* Pencil tool: Click and drag across the canvas to paint pixels.
* Selection tool: Click and drag across the canvas to paint all pixels that fall inside a rectangular selection.

### Bonus 2

Add a color picker which allows the user to select any color using the new, HTML5 `<input type="color">` tag. See the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) more information.
