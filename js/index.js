const data = {
    proj1: {
        placeholder: "Ping pong",
        another: "Volleyball"
    },
    proj2: {
        placeholder: "Snickers",
        another: "Potato chips"
    }
};

const updatePage = (data) => Object.entries(data).forEach(([key, val]) => document.querySelector(`#${key}`).textContent = val)

const init = () => {
    // updatePage(data.defaultData);
    document.querySelector("#one").addEventListener('click', () => updatePage(data.data1));
    document.querySelector("#two").addEventListener('click', () => updatePage(data.data2));
}
document.addEventListener('DOMContentLoaded', init);

const openSide = () => {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("main").style.marginRight = "75%";
    // document.querySelector('name1').textContent = data.proj1.name;
}
const closeSide = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

