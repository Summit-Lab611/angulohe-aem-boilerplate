export default async function decorate(block) {
  block.innerHTML = `
    <div class=quote-quotation">
        ${block.firstElementChild.firstElementChild.innerText}
    </div>
    <div class="quote-attribution">
        ${block.firstElementChild.lastElementChild.innerText}
    </div>
  `;
}
