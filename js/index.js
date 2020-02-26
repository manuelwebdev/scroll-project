const data = {
    defaultData: {
        placeholder: "Stuff",
        another: "More stuff"
    },
    data1: {
        placeholder: "Ping pong",
        another: "Volleyball"
    },
    data2: {
        placeholder: "Snickers",
        another: "Potato chips"
    }
};

const updatePage = (data) => Object.entries(data).forEach(([key, val]) => document.querySelector(`#${key}`).textContent = val)

const init = () => {
    updatePage(data.defaultData);
    document.querySelector("#one").addEventListener('click', () => updatePage(data.data1));
    document.querySelector("#two").addEventListener('click', () => updatePage(data.data2));
}
document.addEventListener('DOMContentLoaded', init);







































// var data = {
//     proj1: {
//         placeholder:'Project 1',
//         content:'Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
//     },
//     proj2: {
//         placeholder:'Project 2',
//         content:'Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
//     },
//     proj3: {
//         name:'Project 2',
//         content:'Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
//     },
// };

// const updatePage = (data) => Object.entries(data).forEach(([key, val]) => document.textContent(1`#${key}`).textContent = val)

// const init = () => {
//     updatePage(data.proj1);
//     document.querySelector('#one').addEventListener('click', () => updatePage(data.proj1));
//     document.querySelector('#two').addEventListener('click', () => updatePage(data.proj2));
// }

// document.addEventListener('DOMContentLoaded', init);

const openNav = () => {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("main").style.marginRight = "75%";
    document.querySelector('name1').textContent = data.proj1.name;
}

// // function openNav() {
// //     document.getElementById("mySidenav").style.width = "75%";
// //     document.getElementById("main").style.marginRight = "75%";
// //     document.querySelector('name1').textContent = projContent.proj1.name;
// // }

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

// // function closeNav() {
// //     document.getElementById("mySidenav").style.width = "0";
// //     document.getElementById("main").style.marginRight = "0";

// // }




// // const proj1 = () => {
// //     document.querySelector('name1').textContent = projContent.proj1.name;
// // }
// // document.addevent