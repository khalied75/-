let count = 0;
const incremntBTn = document.querySelector(".incremntBTn");
const resetBTn = document.querySelector(".resetBTn");

const countDisplay= document.querySelector(".count");

incremntBTn.addEventListener("click", (e) => {
    count++;
    countDisplay.textContent = count;
}
);

resetBTn.addEventListener("click", () =>
{
    count = 0;
    countDisplay.textContent = count;
})
    



function setTask()
{
    localStorage.setTask("save",count);
}
 
function getTask() {
    count = localStorage.getItem(count);
}