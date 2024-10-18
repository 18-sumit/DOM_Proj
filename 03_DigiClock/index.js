const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// using arrow functions:

// const clock = document.querySelector('#clock')

// setInterval(() => {
//     let date = new Date()
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000)