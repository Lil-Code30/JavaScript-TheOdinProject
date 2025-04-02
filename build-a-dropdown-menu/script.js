
const serviceBtn = document.getElementById('services-link');
const serviceDropdown = document.getElementById('services-dropdown');

// function to diplay the dropdown menu
// const toggleMenu = (btn,menu) => {
//     btn.addEventListener('click', () =>{
//         menu.classList.add('visible');
//     })
// }

// toggleMenu(serviceBtn, serviceDropdown);


serviceBtn.addEventListener('click', () => {
    serviceDropdown.classList.toggle("visible");
});

console.log(serviceDropdown);
console.log(serviceBtn);