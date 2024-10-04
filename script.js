



document.querySelector('#failbtn').addEventListener('click', function() {
    document.querySelector('#first-buttons').setAttribute('style', 'display:none');
    document.querySelector('#failans').setAttribute('style', 'display:flex');
    document.querySelector('#moderateans').setAttribute('style', 'display:none');
    document.querySelector('#passans').setAttribute('style', 'display:none');
    document.querySelector('#critans').setAttribute('style', 'display:none');
    document.querySelector('#next-question').setAttribute('style', 'display:flex');
})

document.querySelector('#moderatebtn').addEventListener('click', function() {
    document.querySelector('#first-buttons').setAttribute('style', 'display:none');
    document.querySelector('#failans').setAttribute('style', 'display:none');
    document.querySelector('#moderateans').setAttribute('style', 'display:flex');
    document.querySelector('#passans').setAttribute('style', 'display:none');
    document.querySelector('#critans').setAttribute('style', 'display:none');
    document.querySelector('#next-question').setAttribute('style', 'display:flex');
});

document.querySelector('#passbtn').addEventListener('click', function() {
    document.querySelector('#first-buttons').setAttribute('style', 'display:none');
    document.querySelector('#failans').setAttribute('style', 'display:none');
    document.querySelector('#moderateans').setAttribute('style', 'display:none');
    document.querySelector('#passans').setAttribute('style', 'display:flex');
    document.querySelector('#critans').setAttribute('style', 'display:none');
    document.querySelector('#next-question').setAttribute('style', 'display:flex');
});

document.querySelector('#critbtn').addEventListener('click', function() {
    document.querySelector('#first-buttons').setAttribute('style', 'display:none');
    document.querySelector('#failans').setAttribute('style', 'display:none');
    document.querySelector('#moderateans').setAttribute('style', 'display:none');
    document.querySelector('#passans').setAttribute('style', 'display:none');
    document.querySelector('#critans').setAttribute('style', 'display:flex');
    document.querySelector('#next-question').setAttribute('style', 'display:flex');
});

document.querySelector('#next').addEventListener('click', function () {
    document.querySelector('#header1').setAttribute('style', 'display:none');
    document.querySelector('#header2').setAttribute('style', 'display:flex');
    document.querySelector('#first-scenario').setAttribute('style', 'display:none');
    document.querySelector('#second-scenario').setAttribute('style', 'display:flex');
    document.querySelector('#next').setAttribute('style', 'display:none');
    document.querySelector('#ans').setAttribute('style', 'display:none');
    // document.querySelector('#').setAttribute('style', 'display:none');
    // document.querySelector('#').setAttribute('style', 'display:none');

});




document.querySelector('#yes').addEventListener('click', function() {
    document.querySelector('#secondbtns').setAttribute('style', 'display:none');
    document.querySelector('#ans2').setAttribute('style', 'display:flex');
    document.querySelector('#yesans').setAttribute('style', 'display:flex');
    document.querySelector('#noans').setAttribute('style', 'display:none');
});


document.querySelector('#no').addEventListener('click', function() {
    document.querySelector('#secondbtns').setAttribute('style', 'display:none');
    document.querySelector('#ans2').setAttribute('style', 'display:flex');
    document.querySelector('#yesans').setAttribute('style', 'display:none');
    document.querySelector('#noans').setAttribute('style', 'display:flex');
});

