class SVG {
    constructor() {
        this.textValue = "";
        this.shapeValue = "";
    }

    render() {
        return `<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg" text-anchor="middle">${this.shapeValue}${this.textValue}</svg>`
    }

    setTextValue(text, color) {
        if(text.length > 3) {
            throw new Error("You must stay between 0-3 characters")
        }
        this.textValue = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }

    setShapeValue() {
        this.shapeValue = shape.render()
    }
}

module.exports = SVG;