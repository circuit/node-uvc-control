const mapObj = require("map-obj");

const numberRadixPadded = (number, delimiter, radix, minimumDigits) =>
    // TODO: handle negative numbers better, probably using a library.
    `${number < 0 ? "-" : ""}0${delimiter}${number.toString(radix).padStart(minimumDigits, "0").replace("-", "")}`;

const numberToRadixArrayForLogging = (number) => [
    number,
    numberRadixPadded(number, "b", 2, 8),
    numberRadixPadded(number, "x", 16, 2),
];

const onlyNumbersToRadixForLogging = (key, value) => [
    key,
    typeof value === "number" ? numberToRadixArrayForLogging(value) : value,
];

const expandConstants = (constants) => {
    const expandedConstants = mapObj(
        constants,
        onlyNumbersToRadixForLogging,
        {
            deep: true,
        }
    );

    return expandedConstants;
};

module.exports = expandConstants;
