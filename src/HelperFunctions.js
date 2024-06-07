const triggerTypeAnimationTask = (nextElements, currentElement, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements) => {
    let currentAnimationCharIndex = 0;

    currentElement.style.height = 'fit-content';

    const typeAnimationTask = setInterval(async function (nextElements, currentElement, text, lastElementOfGroup) {
        if (currentAnimationCharIndex < text.length) {
            currentElement.innerHTML = currentElement.innerHTML + text.charAt(currentAnimationCharIndex);
            currentAnimationCharIndex++;
        } else {
            clearInterval(typeAnimationTask);

            if (lastElementOfGroup && nextElements.length !== 0) {
                await triggerDeleteAnimations(deleteAnimationElements, typeAnimationGroup);

                let nextGroupDelay = nextElements[0].getAttribute('typeAnimationDelay');

                setTimeout((elements) => {
                    triggerTypeAnimations(elements, deleteAnimationElements)
                }, nextGroupDelay, nextElements);

                return;
            } else if (lastElementOfGroup && nextElements.length === 0) {
                await triggerDeleteAnimations(deleteAnimationElements, typeAnimationGroup);
            }
        }
    }, typeAnimationInterval, nextElements, currentElement, typeAnimationText, lastElementOfGroup);
}

const triggerDeleteAnimationTask = (element, interval, resolve) => {    
    const deleteAnimationTask = setInterval((element, resolve) => {
        if (element.innerHTML.length > 0) {
            element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length - 1);
        } else {
            clearInterval(deleteAnimationTask);
            resolve();
        }
    }, interval, element, resolve);
}

const triggerTypeAnimations = (elements, deleteAnimationElements) => {
    const firstElementDelay = elements[0].getAttribute('typeAnimationDelay');
    let firstGroupDelay = -1;

    if (firstElementDelay === 0 || firstElementDelay === null) {
        firstGroupDelay = 0;
    }

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        const typeAnimationGroup = element.getAttribute('typeAnimationGroup');

        let typeAnimationText = element.getAttribute('typeAnimationText');

        let typeAnimationDelay = element.getAttribute('typeAnimationDelay');
        let typeAnimationInterval = element.getAttribute('typeAnimationInterval');

        let lastElementOfGroup = false;

        let enableDeleteAnimation = element.getAttribute('enableDeleteAnimation');
        let deleteAnimationDelay = element.getAttribute('deleteAnimationDelay');
        let deleteAnimationInterval = element.getAttribute('deleteAnimationInterval');
        
        if (i === elements.length - 1 || typeAnimationGroup !== elements[i + 1].getAttribute('typeAnimationGroup')) {
            lastElementOfGroup = true;
        }

        if (typeAnimationInterval === null) {
            typeAnimationInterval = 20;
        }

        if (deleteAnimationInterval === null) {
            deleteAnimationInterval = 20;
        }

        if (typeAnimationDelay === null) {
            typeAnimationDelay = 0;
        }

        if (deleteAnimationDelay === null) {
            deleteAnimationDelay = 0;
        }

        if (firstGroupDelay === -1) {
            firstGroupDelay = typeAnimationDelay;
        }

        if (firstGroupDelay !== 0 && firstGroupDelay === typeAnimationDelay) {
            setTimeout((elements, element, typeAnimationText, typeAnimationInterval, lastElementOfGroup, enableDeleteAnimation, deleteAnimationDelay, deleteAnimationInterval) => {
                triggerTypeAnimationTask(elements.slice(i + 1), element, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements);
            }, typeAnimationDelay, elements, element, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements);
        } else {
            triggerTypeAnimationTask(elements.slice(i + 1), element, typeAnimationText, typeAnimationInterval, typeAnimationGroup, lastElementOfGroup, deleteAnimationElements);
        }

        if (lastElementOfGroup) {
            return;
        }
    }
}

const triggerDeleteAnimations = (elements, deleteAnimationGroup) => {
    return new Promise((resolve) => {
        let deleteAnimationTaskTriggered = false;

        for (const element of elements) {
            let delay = element.getAttribute('deleteAnimationDelay');
            let interval = element.getAttribute('deleteAnimationInterval');
        
            if (delay === null) {
                delay = 0;
            }
        
            if (interval === null) {
                interval = 20;
            }
    
            if (element.getAttribute('deleteAnimationGroup') === deleteAnimationGroup) {
                console.log(deleteAnimationGroup);

                deleteAnimationTaskTriggered = true;
                setTimeout((element, interval, resolve) => {
                    triggerDeleteAnimationTask(element, interval, resolve);
                }, delay, element, interval, resolve);
            }
        }

        if (deleteAnimationTaskTriggered === false) {
            resolve();
        }
    });
}

export const scheduleTypeAnimations = () => {
    const elements = document.body.querySelectorAll('[enableTypeAnimation=true]');
    let elementsArray = [];

    const deleteAnimationElements = document.body.querySelectorAll('[enableDeleteAnimation=true]');

    for (const element of elements) {
        elementsArray.push(element);
    }
    
    triggerTypeAnimations(elementsArray, deleteAnimationElements);
}