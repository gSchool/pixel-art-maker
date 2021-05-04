const state = {
  selectedColor: '#000000',
  paletteColors: ['#FFFFFF', '#D8B3FF','#B974FF', '#9D42F9', '#7B40B7', '#7A0BEB', '#000000', '#FFACD5','#B6C6FF'],
}

class Pixel {
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

class PixelArtMaker {
  pixels: Pixel[];
  palette: ColorPalette;

  constructor(element: HTMLElement) {
    const $pixels: HTMLElement[] = [];
    for(let i = 0; i < 1018; i++) {
      const $pix = this.makePixelElement();
      $pixels.push($pix);
      element.appendChild($pix);
    }
    const $palette = document.getElementById('pixel-art-color-palette');
  

    this.pixels = Array.prototype.map.call($pixels, ($pix) => new Pixel($pix));
    this.palette = new ColorPalette($palette, state.paletteColors);
  }

  makePixelElement():HTMLElement {
    const $pix = document.createElement('DIV');
    $pix.setAttribute('class', 'pixel');
    return $pix;
  }  
}

class ColorPaletteItem {
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

class ColorPalette {
  paletteItems: ColorPalette[];
  constructor(element: HTMLElement, colors: string[]) {
    const $items = element.getElementsByClassName('palette-item');
    this.paletteItems = Array.prototype.map.call($items, ($item, idx) => new ColorPaletteItem($item, colors[idx]));
  }
}

const pm = new PixelArtMaker(document.getElementById('pixel-art-array'))