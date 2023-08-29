const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

const username = document.querySelectorAll('.username');
username.forEach((inp,index) => {
    inp.onchange = () => {
        console.log("input number " + index + ": ", inp.value);
    }
});


