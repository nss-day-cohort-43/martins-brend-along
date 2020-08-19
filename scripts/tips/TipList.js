import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tipList");

    const tips = useTip();

    let tipHTML = "";
    for (const tip of tips) {
        tipHTML += Tip(tip);
    }

    contentElement.innerHTML += `
        ${tipHTML}
    `
};