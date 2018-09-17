/**
 * Make an object immutable by recursively freezing nested properties.
 * 
 * @param {object} obj 
 */
export default function deepFreeze(obj) {
    if (obj === null || obj === undefined || typeof obj !== 'object') {
        return;
    }

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            deepFreeze(obj[prop]);
        }
    }
    Object.freeze(obj);
}