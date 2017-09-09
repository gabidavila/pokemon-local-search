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
    }
  }
})();
