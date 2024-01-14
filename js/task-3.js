function getElementWidth(content, padding, border) {
    const contentValue = Number.parseFloat(content);
    const paddingValue = 2 * Number.parseFloat(padding);
    const borderValue = 2 * Number.parseFloat(border);

    return contentValue + paddingValue + borderValue;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
