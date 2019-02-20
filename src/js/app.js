import GoogleItPopover from './googleItPopover';

import '../styles/popover.scss';

let popover = new GoogleItPopover();
let keyPressCount = 0;

const createGoogleItHighlighter = e => {
    if (e.key === 'g' || e.key === 'G') {
        popover.create();
        keyPressCount += 1;
    }

    const doubleKeyPressTimeout = setTimeout(() => {
        keyPressCount = 0;
    }, 300);

    if (keyPressCount === 2) {
        popover.quickSearch();
        keyPressCount = 0;
        clearTimeout(doubleKeyPressTimeout);
    }
};



const init = () => {
    window.addEventListener('keyup', createGoogleItHighlighter);
    document.addEventListener('selectionchange', popover.destroy);
};

const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);