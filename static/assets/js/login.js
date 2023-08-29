const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const form = document.querySelector('form');
const btn = document.querySelectorAll('.btn');
registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

const username = document.querySelectorAll('.username');
username.forEach((inp,index) => {
    inp.oninput = () => {
        console.log(inp.value.length);
        if(inp.value.length >= 8) {
            btn[index].classList.add('btn2');
        }else {
            btn[index].classList.remove('btn2');
        }
    }
});


