# Assignment - Pixel Art Maker

Create your own Pixel Art Paint Program, which lets you choose colors from a palette of your choice to "paint" pixel art. The interface is completely up to you, but it could look something like this:

![Example of Pixel Art Maker](pixel-art-maker-alt.png)

A user should be able to click on a color from their palette, allowing them to then be able click on individual pixels in a canvas area to paint them.

Here's an example of a workflow that could be implemented:

1. Create 10 or so small, white, square divs to start making a pixel canvas.
2. Add an event listener to each so that when clicked on, that div's background turns red.
3. Add a couple more square divs to make a palette. Begin with 2 background colors (red and blue), which allow the user to set the current "brush" color, instead of a pixel's background always turning red.
4. Add the rest of the standard colors to your palette as well as an eraser. (Red, Orange, Yellow, Green, Blue, Purple, Black, Brown, White, etc.)
5. Add more divs to expand the size of your pixel canvas.

### **Bonus Challenges:**

* Pencil tool: Add the ability to click and drag to draw pencil lines
* Selection tool: Add a tool which allows the user to drag across the screen and paint all pixels that fall inside the rectangular selection
* Add a color picker which allows the user to select any color. Look into HTML5 color inputs
