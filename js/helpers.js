const helper = (function () {
  return {
    generateTag: function (tag, options) {
      const newTag = document.createElement(tag);
      for (let attribute in options) {
        if (attribute === "content") {
          newTag.innerHTML = options["content"];
          continue;
        }

        if (attribute === "data") {
          let dataset = options["data"];
          for (let data in dataset) {
            newTag.dataset[data] = dataset[data];
          }
          continue;
        }
        newTag.setAttribute(attribute, options[attribute]);
      }
      return newTag;
    },
    changeButtonColors: function(next, previous, listLength) {
      const inactive = "ui button";
      const active = "ui primary button";

      if (offset === 0) {
        previous.setAttribute("class", inactive);
        next.setAttribute("class", active);
      } else {
        previous.setAttribute("class", active);
      }

      if(offset > 0 && (offset + limit) < listLength  ) {
        next.setAttribute("class", active);
      } else {
        next.setAttribute("class", inactive);
      }
    }
  }
})();
