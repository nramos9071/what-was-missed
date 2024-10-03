



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

// document.querySelector('#').addEventListener('click', function() {
//     document.querySelector('#').setAttribute('style', 'display:none');
//     document.querySelector('#').setAttribute('style', 'display:none');
//     document.querySelector('#').setAttribute('style', 'display:none');
//     document.querySelector('#').setAttribute('style', 'display:none');
// });

