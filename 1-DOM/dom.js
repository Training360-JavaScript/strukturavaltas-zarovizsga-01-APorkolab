function manipulateDom() {
    document.querySelectorAll('.quote').forEach(item => {
        item.style.borderColor = 'blue';
        item.style.backgroundColor = 'lightblue';
        item.style.fontStyle = 'italic';
    });
};

export {
    manipulateDom
};