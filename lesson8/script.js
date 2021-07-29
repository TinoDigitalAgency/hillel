const obj = {name: 'Alina', age: 23, address: {country: 'UA', city: 'Kyiv'}};

const copy = (object) => {
    let newObject = {}
    Object.keys(object).forEach((key) => {
        let value = object[key];

        if (typeof value === 'object') {
            let child = {}
            child = copy(value);
            return newObject = {...newObject, [key]: child};
        } else {
            newObject = {...newObject, [key]: value}
        }
    })
    return newObject;
}

console.log('Old Object: ', obj);
console.log('New Object:  ', copy(obj));
