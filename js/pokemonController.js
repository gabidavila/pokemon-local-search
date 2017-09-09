function render (list, target) {
  list.forEach(function (item) {
    const divColumn = helper.generateTag("div", {class: "column"});
    const divItem = helper.generateTag("div", {class: "ui segment center aligned yellow inverted pokemon", data: {id: item.id, name: item.name}});
    const title = helper.generateTag("h2", {content: item.name, class: "ui header dividing centered" });
    const p = helper.generateTag("p", {content: "Click on image to flip"});

    divItem.append(title);
    divColumn.append(divItem);
    flip(divItem);
    divItem.append(p);
    target.append(divColumn);
  });
}


function flip(element) {
  let img = element.querySelector("img");

  if (img == null) {
    img = helper.generateTag("img", {title: element.dataset.name});
    element.append(img);
  }

  let sprite = img.dataset.sprite;

  if (sprite === "front") {
    sprite = "back";
    img.src = `images/pokemon/back/${element.dataset.id}.png`;
  } else {
    sprite = "front";
    img.src = `images/pokemon/${element.dataset.id}.png`;
  }

  img.dataset.sprite = sprite;
}
