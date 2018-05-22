class Smth extends Function {
    constructor(x) {
        super();

        // refer to `smth` instead of `this`
        function smth() { return x; };
        Object.setPrototypeOf(smth, Smth.prototype);
        return smth;
    }
}


(rows, accessor, headerText)
const maxWidth = 400;
const magicSpacing = 10;
const cellLength = Math.max(
    ...rows.map(row => (`${row[accessor]}` || '').length),
    headerText.length,
);
return Math.min(maxWidth, cellLength * magicSpacing)