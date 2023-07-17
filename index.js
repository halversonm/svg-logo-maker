const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require("./lib/svg");

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
                message: "What text would you like inside your shape? (0-3)",
            },
            {
                name: "textColor",
                type: "input",
                message: "What color would you like your shape's text to be?",
            }
    ]).then((res) => {
        console.log(res)
    })
}

mainPrompt()