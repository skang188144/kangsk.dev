const triggerTypeAnimationTask = (element, resolve) => {
    const text = element.getAttribute('typeAnimationText');
    let interval = element.getAttribute('typeAnimationInterval');

    let index = 0;

    if (interval === null) {
        interval = 20;
    }

    const typeAnimationTask = setInterval((element, text, resolve) => {
        if (index < text.length) {
            element.innerHTML = element.innerHTML.slice(0, index) + text.charAt(index) + element.innerHTML.slice(index + 1, text.length);
            index++;
        } else {
            clearInterval(typeAnimationTask);

            if (resolve !== undefined && resolve !== null) {
                resolve();
            }
        }
    }, interval, element, text, resolve);
}

const triggerDeleteAnimationTask = (element, resolve) => {
    let interval = element.getAttribute('deleteAnimationInterval');

    if (interval === null) {
        interval = 20;
    }

    const deleteAnimationTask = setInterval((element, resolve) => {
        if (element.innerHTML.length > 0) {
            element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length - 1);
        } else {
            clearInterval(deleteAnimationTask);

            if (resolve !== undefined && resolve !== null) {
                resolve();
            }
        }
    }, interval, element, resolve);
}

async function triggerTypeAnimations (elements) {
    let currentDelay = -1;

    for (let i = 0; i < elements.length; i++) {
        let delay = elements[i].getAttribute('typeAnimationDelay');

        if (delay === null) {
            delay = 0;
        } else if (delay !== currentDelay) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            currentDelay = delay;
        }

        if (i === elements.length - 1) {
            return new Promise((resolve) => {
                triggerTypeAnimationTask(elements[i], resolve);
            });
        }
    
        triggerTypeAnimationTask(elements[i]);
    }
}

async function triggerDeleteAnimations (elements) {
    let currentDelay = -1;

    for (let i = 0; i < elements.length; i++) {
        let delay = elements[i].getAttribute('deleteAnimationDelay');

        if (delay === null) {
            delay = 0;
        } else if (delay !== currentDelay) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            currentDelay = delay;
        }

        if (i === elements.length - 1) {
            return new Promise((resolve) => {
                triggerDeleteAnimationTask(elements[i], resolve);
            });
        }
    
        triggerDeleteAnimationTask(elements[i]);    
    }
}

export async function scheduleAnimations () {
    const typeAnimationElements = document.body.querySelectorAll('[enableTypeAnimation=true]');
    const deleteAnimationElements = document.body.querySelectorAll('[enableDeleteAnimation=true]');

    let typeAnimationElementsByGroup = [];
    let deleteAnimationElementsByGroup = [];

    let numGroups = 0;

    for (const element of typeAnimationElements) {
        if (typeAnimationElementsByGroup[element.getAttribute('typeAnimationGroup')] === undefined) {
            typeAnimationElementsByGroup[element.getAttribute('typeAnimationGroup')] = [];
        }
        typeAnimationElementsByGroup[element.getAttribute('typeAnimationGroup')].push(element);
    }

    for (const element of deleteAnimationElements) {
        if (deleteAnimationElementsByGroup[element.getAttribute('deleteAnimationGroup')] === undefined) {
            deleteAnimationElementsByGroup[element.getAttribute('deleteAnimationGroup')] = [];
        }
        deleteAnimationElementsByGroup[element.getAttribute('deleteAnimationGroup')].push(element);
    }

    if (typeAnimationElementsByGroup.length > deleteAnimationElementsByGroup.length) {
        numGroups = typeAnimationElementsByGroup.length;
    } else {
        numGroups = deleteAnimationElementsByGroup.length;
    }

    for (let i = 0; i < numGroups; i++) {
        if (typeAnimationElementsByGroup[i] !== undefined && typeAnimationElementsByGroup[i] !== null && typeAnimationElementsByGroup[i].length !== 0) {
            await triggerTypeAnimations(typeAnimationElementsByGroup[i]);
        }

        if (deleteAnimationElementsByGroup[i] !== undefined && deleteAnimationElementsByGroup[i] !== null && deleteAnimationElementsByGroup[i].length !== 0) {
            await triggerDeleteAnimations(deleteAnimationElementsByGroup[i]);
        }
    }
}

// const triggerTypeAnimationTask = (nextElements, currentElement, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements) => {
//     let currentAnimationCharIndex = 0;

//     currentElement.style.height = 'fit-content';

//     const typeAnimationTask = setInterval(async function (nextElements, currentElement, text, lastElementOfGroup) {
//         if (currentAnimationCharIndex < text.length) {
//             currentElement.innerHTML = currentElement.innerHTML + text.charAt(currentAnimationCharIndex);
//             currentAnimationCharIndex++;
//         } else {
//             clearInterval(typeAnimationTask);

//             if (lastElementOfGroup && nextElements.length !== 0) {
//                 await triggerDeleteAnimations(deleteAnimationElements, typeAnimationGroup);

//                 let nextGroupDelay = nextElements[0].getAttribute('typeAnimationDelay');

//                 setTimeout((elements) => {
//                     triggerTypeAnimations(elements, deleteAnimationElements)
//                 }, nextGroupDelay, nextElements);

//                 return;
//             } else if (lastElementOfGroup && nextElements.length === 0) {
//                 await triggerDeleteAnimations(deleteAnimationElements, typeAnimationGroup);
//             }
//         }
//     }, typeAnimationInterval, nextElements, currentElement, typeAnimationText, lastElementOfGroup);
// }

// const triggerDeleteAnimationTask = (element, interval, resolve) => {    
//     const deleteAnimationTask = setInterval((element, resolve) => {
//         if (element.innerHTML.length > 0) {
//             element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length - 1);
//         } else {
//             clearInterval(deleteAnimationTask);
//             resolve();
//         }
//     }, interval, element, resolve);
// }

// const triggerTypeAnimations = (elements, deleteAnimationElements) => {
//     const firstElementDelay = elements[0].getAttribute('typeAnimationDelay');
//     let firstGroupDelay = -1;

//     if (firstElementDelay === 0 || firstElementDelay === null) {
//         firstGroupDelay = 0;
//     }

//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];

//         const typeAnimationGroup = element.getAttribute('typeAnimationGroup');

//         let typeAnimationText = element.getAttribute('typeAnimationText');

//         let typeAnimationDelay = element.getAttribute('typeAnimationDelay');
//         let typeAnimationInterval = element.getAttribute('typeAnimationInterval');

//         let lastElementOfGroup = false;

//         let enableDeleteAnimation = element.getAttribute('enableDeleteAnimation');
//         let deleteAnimationDelay = element.getAttribute('deleteAnimationDelay');
//         let deleteAnimationInterval = element.getAttribute('deleteAnimationInterval');
        
//         if (i === elements.length - 1 || typeAnimationGroup !== elements[i + 1].getAttribute('typeAnimationGroup')) {
//             lastElementOfGroup = true;
//         }

//         if (typeAnimationInterval === null) {
//             typeAnimationInterval = 20;
//         }

//         if (deleteAnimationInterval === null) {
//             deleteAnimationInterval = 20;
//         }

//         if (typeAnimationDelay === null) {
//             typeAnimationDelay = 0;
//         }

//         if (deleteAnimationDelay === null) {
//             deleteAnimationDelay = 0;
//         }

//         if (firstGroupDelay === -1) {
//             firstGroupDelay = typeAnimationDelay;
//         }

//         if (firstGroupDelay !== 0 && firstGroupDelay === typeAnimationDelay) {
//             setTimeout((elements, element, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements) => {
//                 triggerTypeAnimationTask(elements.slice(i + 1), element, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements);
//             }, typeAnimationDelay, elements, element, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements);
//         } else {
//             triggerTypeAnimationTask(elements.slice(i + 1), element, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements);
//         }

//         if (lastElementOfGroup) {
//             return;
//         }
//     }
// }

// const triggerDeleteAnimations = (elements, deleteAnimationGroup) => {
//     return new Promise((resolve) => {
//         let deleteAnimationTaskTriggered = false;

//         for (const element of elements) {
//             let delay = element.getAttribute('deleteAnimationDelay');
//             let interval = element.getAttribute('deleteAnimationInterval');
        
//             if (delay === null) {
//                 delay = 0;
//             }
        
//             if (interval === null) {
//                 interval = 20;
//             }
    
//             if (element.getAttribute('deleteAnimationGroup') === deleteAnimationGroup) {
//                 console.log(deleteAnimationGroup);

//                 deleteAnimationTaskTriggered = true;
//                 setTimeout((element, interval, resolve) => {
//                     triggerDeleteAnimationTask(element, interval, resolve);
//                 }, delay, element, interval, resolve);
//             }
//         }

//         if (deleteAnimationTaskTriggered === false) {
//             resolve();
//         }
//     });
// }

// export const scheduleTypeAnimations = () => {
//     const elements = document.body.querySelectorAll('[enableTypeAnimation=true]');
//     let elementsArray = [];

//     const deleteAnimationElements = document.body.querySelectorAll('[enableDeleteAnimation=true]');

//     for (const element of elements) {
//         elementsArray.push(element);
//     }
    
//     triggerTypeAnimations(elementsArray, deleteAnimationElements);
// }