const data = {
    proj1: {
        name: "Project 1",
        another: "Volleyball",
    },
    proj2: {
        name: "Project 2",
        another: "Potato chips",
    }
};

const updatePage = (data) => Object.entries(data).forEach(([key, val]) => document.querySelector(`#${key}`).textContent = val)

const init = () => {
    // updatePage(data.defaultData);
    document.querySelector("#one").addEventListener('click', () => updatePage(data.proj1));
    document.querySelector("#two").addEventListener('click', () => updatePage(data.proj2));
}
document.addEventListener('DOMContentLoaded', init);

const openSide = () => {
    document.getElementById("mySidenav").style.width = "75%";
    document.getElementById("main").style.marginRight = "75%";
}
const closeSide = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

