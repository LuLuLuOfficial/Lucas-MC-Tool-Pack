import { getElementByXPath } from "/js/function/utils.js";

const side_bar = getElementByXPath("*//div[@class='side-bar']");
const side_bar_fold_button = getElementByXPath(
    "*//div[@class='side-bar']//button[@class='fold-button']"
);
side_bar_fold_button.addEventListener("click", function () {
    if (side_bar.getAttribute("state") == "hide") {
        side_bar.setAttribute("state", "show");
    } else if (side_bar.getAttribute("state") == "show") {
        side_bar.setAttribute("state", "hide");
    }
});

const top_bar = getElementByXPath("*//div[@class='top-bar']");
const top_bar_fold_button = getElementByXPath(
    "*//div[@class='top-bar']//button[@class='fold-button']"
);
top_bar_fold_button.addEventListener("click", function () {
    if (top_bar.getAttribute("state") == "hide") {
        top_bar.setAttribute("state", "show");
    } else if (top_bar.getAttribute("state") == "show") {
        top_bar.setAttribute("state", "hide");
    }
});
