import CONST from '../CONST';

/**
 * Generates a random positive 64 bit numeric string by randomly generating the left, middle, and right parts and concatenating them. Used to generate client-side ids.
 * @returns {String} string representation of a randomly generated 64 bit signed integer
 */
/* eslint-disable no-unused-vars */
function rand64() {
    // Max 64-bit signed:
    // 9,223,372,036,854,775,807
    // The left part of the max 64-bit number *+1* because we're flooring it.
    const left = Math.floor(Math.random() * (CONST.MAX_64BIT_LEFT_PART + 1));

    let middle;
    let right;

    // If the left is any number but the highest possible, we can actually have any value for the middle part.
    if (left !== CONST.MAX_64BIT_LEFT_PART) {
        middle = Math.floor(Math.random() * 10000000);
    } else {
        middle = Math.floor(Math.random() * (CONST.MAX_64BIT_MIDDLE_PART + 1));
    }

    // Unless both the left and middle parts were the maximums, the right part can be anything.
    if (left !== CONST.MAX_64BIT_LEFT_PART || middle !== CONST.MAX_64BIT_MIDDLE_PART) {
        right = Math.floor(Math.random() * 10000000);
    } else {
        right = Math.floor(Math.random() * (CONST.MAX_64BIT_RIGHT_PART + 1));
    }

    // Pad the middle and right with zeros
    const middleString = middle.toString().padStart(7, '0');
    const rightString = right.toString().padStart(7, '0');

    return left + middleString + rightString;
}

export {
    // eslint-disable-next-line import/prefer-default-export
    rand64,
};
