const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require("./lib/svg");
const { writeFile } = require("fs/promises")

const mainPrompt = () => {
    inquirer
        .prompt([
            {
                name: "shape",
                type: "list",
                message: "What shape would you like your SVG to be?",
                choices: ["Circle", "Square", "Triangle"]
            },
            {
                name: "shapeColor",
                type: "input",
                message: "What color would you like your shape to be?",
            },
            {
                name: "shapeText",
                type: "input",
                message: "What text would you like inside your shape? (0-3 characters)",
            },
            {
                name: "textColor",
                type: "input",
                message: "What color would you like your shape's text to be?",
            }
    ]).then(({shape, shapeColor, shapeText, textColor}) => {
        let shapeSVG;
        if(shape === "Circle") {
            shapeSVG = new Circle()
        } else if(shape === "Triangle") {
            shapeSVG = new Triangle()
        } else if(shape === "Square") {
            shapeSVG = new Square()
        }
        shapeSVG.setColor(shapeColor)
        const svg = new SVG();
        svg.setShapeValue(shapeSVG)
        svg.setTextValue(shapeText, textColor)
        return writeFile("logo.svg", svg.render())
    }).then(() => {
        console.log("Generated logo.svg")
    }).catch((err) => {
        console.log(err)
        console.log("Something went wrong")
    })
}

mainPrompt()