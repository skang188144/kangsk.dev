import './components/TerminalController.css'

const triggerTypeAnimationTask = (element, resolve) => {
    const text = element.getAttribute('typeanimationtext');
    let interval = element.getAttribute('typeanimationinterval');

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
    let interval = element.getAttribute('deleteanimationinterval');

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

const triggerCSSAnimationTask = (element, resolve) => {
    element.style.animationPlayState = 'running';
    element.style.webkitAnimationPlayState = 'running';

    if (resolve !== undefined && resolve !== null) {
        resolve();
    }
}

async function triggerTypeAnimations (elements) {
    let currentDelay = -1;

    for (let i = 0; i < elements.length; i++) {
        let delay = elements[i].getAttribute('typeanimationdelay');

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
        let delay = elements[i].getAttribute('deleteanimationdelay');

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

async function triggerCSSAnimations (elements) {
    let currentDelay = -1;

    for (let i = 0; i < elements.length; i++) {
        let delay = elements[i].getAttribute('cssanimationdelay');

        if (delay === null) {
            delay = 0;
        } else if (delay !== currentDelay) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            currentDelay = delay;
        }

        if (i === elements.length - 1) {
            return new Promise((resolve) => {
                triggerCSSAnimationTask(elements[i], resolve);
            });
        }

        triggerCSSAnimationTask(elements[i]);
    }
}

export async function scheduleAnimations () {
    const typeAnimationElements = document.body.querySelectorAll('[enabletypeanimation=true]');
    const deleteAnimationElements = document.body.querySelectorAll('[enabledeleteanimation=true]');
    const cssAnimationElements = document.body.querySelectorAll('[enablecssanimation=true]')

    let typeAnimationElementsByGroup = [];
    let deleteAnimationElementsByGroup = [];
    let cssAnimationElementsByGroup = [];

    let numGroups = 0;

    for (const element of typeAnimationElements) {
        if (typeAnimationElementsByGroup[element.getAttribute('typeanimationgroup')] === undefined) {
            typeAnimationElementsByGroup[element.getAttribute('typeanimationgroup')] = [];
        }
        typeAnimationElementsByGroup[element.getAttribute('typeanimationgroup')].push(element);
    }

    for (const element of deleteAnimationElements) {
        if (deleteAnimationElementsByGroup[element.getAttribute('deleteanimationgroup')] === undefined) {
            deleteAnimationElementsByGroup[element.getAttribute('deleteanimationgroup')] = [];
        }
        deleteAnimationElementsByGroup[element.getAttribute('deleteanimationgroup')].push(element);
    }

    for (const element of cssAnimationElements) {
        if (cssAnimationElementsByGroup[element.getAttribute('cssanimationgroup')] === undefined) {
            cssAnimationElementsByGroup[element.getAttribute('cssanimationgroup')] = [];
        }

        cssAnimationElementsByGroup[element.getAttribute('cssanimationgroup')].push(element);
    }

    numGroups = Math.max(typeAnimationElementsByGroup.length, deleteAnimationElementsByGroup.length, cssAnimationElementsByGroup.length);

    for (let i = 0; i < numGroups; i++) {
        if (typeAnimationElementsByGroup[i] !== undefined && typeAnimationElementsByGroup[i] !== null && typeAnimationElementsByGroup[i].length !== 0) {
            await triggerTypeAnimations(typeAnimationElementsByGroup[i]);
        }

        if (deleteAnimationElementsByGroup[i] !== undefined && deleteAnimationElementsByGroup[i] !== null && deleteAnimationElementsByGroup[i].length !== 0) {
            await triggerDeleteAnimations(deleteAnimationElementsByGroup[i]);
        }

        if (cssAnimationElementsByGroup[i] !== undefined && cssAnimationElementsByGroup[i] !== null && cssAnimationElementsByGroup[i].length !== 0) {
            await triggerCSSAnimations(cssAnimationElementsByGroup[i]);
        }
    }
}

// const triggerTypeAnimationTask = (nextElements, currentElement, typeanimationtext, typeanimationinterval, typeanimationgroup, lastElementOfGroup, deleteAnimationElements) => {
//     let currentAnimationCharIndex = 0;

//     currentElement.style.height = 'fit-content';

//     const typeAnimationTask = setInterval(async function (nextElements, currentElement, text, lastElementOfGroup) {
//         if (currentAnimationCharIndex < text.length) {
//             currentElement.innerHTML = currentElement.innerHTML + text.charAt(currentAnimationCharIndex);
//             currentAnimationCharIndex++;
//         } else {
//             clearInterval(typeAnimationTask);

//             if (lastElementOfGroup && nextElements.length !== 0) {
//                 await triggerDeleteAnimations(deleteAnimationElements, typeanimationgroup);

//                 let nextGroupDelay = nextElements[0].getAttribute('typeanimationdelay');

//                 setTimeout((elements) => {
//                     triggerTypeAnimations(elements, deleteAnimationElements)
//                 }, nextGroupDelay, nextElements);

//                 return;
//             } else if (lastElementOfGroup && nextElements.length === 0) {
//                 await triggerDeleteAnimations(deleteAnimationElements, typeanimationgroup);
//             }
//         }
//     }, typeanimationinterval, nextElements, currentElement, typeanimationtext, lastElementOfGroup);
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
//     const firstElementDelay = elements[0].getAttribute('typeanimationdelay');
//     let firstGroupDelay = -1;

//     if (firstElementDelay === 0 || firstElementDelay === null) {
//         firstGroupDelay = 0;
//     }

//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];

//         const typeanimationgroup = element.getAttribute('typeanimationgroup');

//         let typeanimationtext = element.getAttribute('typeanimationtext');

//         let typeAnimationDelay = element.getAttribute('typeanimationdelay');
//         let typeanimationinterval = element.getAttribute('typeanimationinterval');

//         let lastElementOfGroup = false;

//         let enableDeleteAnimation = element.getAttribute('enableDeleteAnimation');
//         let deleteAnimationDelay = element.getAttribute('deleteanimationdelay');
//         let deleteAnimationInterval = element.getAttribute('deleteanimationinterval');
        
//         if (i === elements.length - 1 || typeanimationgroup !== elements[i + 1].getAttribute('typeanimationgroup')) {
//             lastElementOfGroup = true;
//         }

//         if (typeanimationinterval === null) {
//             typeanimationinterval = 20;
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
//             setTimeout((elements, element, typeanimationtext, typeanimationinterval, typeanimationgroup, lastElementOfGroup, deleteAnimationElements) => {
//                 triggerTypeAnimationTask(elements.slice(i + 1), element, typeanimationtext, typeanimationinterval, typeanimationgroup, lastElementOfGroup, deleteAnimationElements);
//             }, typeAnimationDelay, elements, element, typeanimationtext, typeanimationinterval, typeanimationgroup, lastElementOfGroup, deleteAnimationElements);
//         } else {
//             triggerTypeAnimationTask(elements.slice(i + 1), element, typeanimationtext, typeanimationinterval, typeanimationgroup, lastElementOfGroup, deleteAnimationElements);
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
//             let delay = element.getAttribute('deleteanimationdelay');
//             let interval = element.getAttribute('deleteanimationinterval');
        
//             if (delay === null) {
//                 delay = 0;
//             }
        
//             if (interval === null) {
//                 interval = 20;
//             }
    
//             if (element.getAttribute('deleteanimationgroup') === deleteAnimationGroup) {
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