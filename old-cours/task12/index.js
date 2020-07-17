class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let opt = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		div.style.cssText = opt;
    }
}

// присваиваем параметры классу
const param = new Options(100, 100, 'black', 24, 'center');

// создаем див с нужными параметрами
param.createDiv();