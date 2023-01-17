let eatListHeader = document.querySelector(".eat-list-header")
let drinkListHeader = document.querySelector(".drink-list-header")

let eatList = document.querySelector(".eat-list")
let drinkList = document.querySelector(".drink-list")

const displayMenuList = (event) => {
    console.log(event.target)
    if (event.target === eatListHeader) {
        eatList.style.display = "block";
        eatListHeader.classList.add("clicked");

        drinkList.style.display = "none";
        drinkListHeader.classList.remove("clicked");
    } else if (event.target === drinkListHeader) {
        drinkList.style.display = "block";
        drinkListHeader.classList.add("clicked");

        eatList.style.display = "none";
        eatListHeader.classList.remove("clicked");
    }
}