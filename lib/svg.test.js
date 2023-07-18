const SVG = require("./svg")

describe('SVG', () => {
    describe('render', () => {
        it('should return the svg render code with an updated shapeValue and textValue', () => {
            const svg = new SVG;
            svg.setTextValue("IDK", "white");
            const expectedSvg = `<svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg" text-anchor="middle"><text x="150" y="125" font-size="40" text-anchor="middle" fill="white">IDK</text></svg>`
            expect(svg.render()).toEqual(expectedSvg);
        });
    });
});