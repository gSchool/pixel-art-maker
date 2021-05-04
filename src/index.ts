
/**
 * A few interfaces for our classes.  "Colorable" ensures that the class has a `setColor` method,
 * and "Clickable" ensures it has a handleClick method.
 */
interface Colorable {
  setColor: Function
}

interface Clickable {
  handleClick: Function
}

/**
 * A type definition for our application's state, this ensures that our state object will always
 * have the expected shape.
 */

type PixelMakerState = {
  selectedColor: string,
  paletteColors: string[]
}

/**
 * Here, we define a global state for our app.  Since the code for this app is short and all in 
 * one file, and since we are not concerned with application security, this pattern will serve
 * us well enough.  If we were to add more complexity to our code or prepare it for end-users,
 * we would want to change how we implement the state.
 */

const state: PixelMakerState = {
  selectedColor: '#000000',
  paletteColors: ['#FFFFFF', '#D8B3FF','#B974FF', '#9D42F9', '#7B40B7', '#7A0BEB', '#000000', '#FFACD5','#B6C6FF'],
}

/** 
 * This class controls an individual pixel element on the DOM.  
 */

class Pixel implements Colorable, Clickable {
  $pix: HTMLElement = null;

  constructor(element: HTMLElement) {
    this.$pix = element;
    this.$pix.onclick = this.handleClick.bind(this);
  }

  setColor(hexcode: string):void {
    this.$pix.style.backgroundColor = hexcode;
  }

  handleClick(event: Event) {
    this.setColor(state.selectedColor);
  }
}

/**
 * This class controls an individual color selector DOM element.  
 */

class ColorPaletteItem implements Colorable, Clickable {
  $color: HTMLElement;
  color: string;

  constructor(element: HTMLElement, color) {
    this.$color = element;
    this.color = color;
    this.setColor(color);
    this.$color.onclick = this.handleClick.bind(this);
  }
  setColor(hexcode: string):void {
    this.$color.style.backgroundColor = hexcode;
  }

  handleClick(event: Event) {
    state.selectedColor = this.color;
  }
}

/**
 * This class groups the ColorPaletteItem instances together.
 */

class ColorPalette {
  paletteItems: ColorPalette[];
  constructor(element: HTMLElement, colors: string[]) {
    const $items = element.getElementsByClassName('palette-item');
    this.paletteItems = Array.prototype.map.call($items, ($item, idx) => new ColorPaletteItem($item, colors[idx]));
  }
}

/**
 * This is the main class for this application.  It creates all the pixel DOM elements, 
 * instantiates all the Pixel objects, and instantiates the palette.
 */
class PixelArtMaker {
  pixels: Pixel[];
  palette: ColorPalette;

  constructor(element: HTMLElement) {
    // generate the div elements which represent our pixels.
    const $pixels: HTMLElement[] = [];
    for(let i = 0; i < 1018; i++) {
      const $pix = this.makePixelElement();
      $pixels.push($pix);
      element.appendChild($pix);
    }

    // grab the div where we'll mount the color palette
    const $palette = document.getElementById('pixel-art-color-palette');

    // uses .map to instantiate one Pixel instance for each DOM element created in the for loop above. 
    this.pixels = $pixels.map(($pix:HTMLElement):Pixel => new Pixel($pix));
    // create the color palette using the colors specified in the app state.
    this.palette = new ColorPalette($palette, state.paletteColors);
  }

  // This helper function creates a div using document.createElement, and adds the 'pixel' class 
  // to it.  It returns the equivalent of the HTML <div class="pixel"></div>
  private makePixelElement():HTMLElement {
    const $pix = document.createElement('DIV');
    $pix.setAttribute('class', 'pixel');
    return $pix;
  }  
}

// Instantiate the main class, which kicks off the application.
const pm = new PixelArtMaker(document.getElementById('pixel-art-array'))