const Add = (...args) => args.reduce((a, b) => a + b)
const Subtract = (...args) => args.reduce((a, b) => a - b)
const Multiply = (...args) => args.reduce((a, b) => a * b)
const Divide = (...args) => args.reduce((a, b) => a / b)
const Test = 'dd'

const ComputeService = {
    Add, Subtract, Multiply, Divide, Test
}

export default ComputeService