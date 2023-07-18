const {Circle, Square, Triangle} = require("./shapes")

describe("Circle", (() => {
    test("renders a green circle", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="60" fill="green"/>'
        const circle = new Circle()
        circle.setColor("green")
        const output = circle.render()
        expect(output).toEqual(expectedSvg)
    })
}))