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
    changeButtonColors: function () {
      const inactive = "ui button";
      const active = "ui primary button";

      if (offset === 0) {
        previousButton.setAttribute("class", inactive);
        nextButton.setAttribute("class", active);
      } else {
        previousButton.setAttribute("class", active);
      }

      if (offset > 0 && (offset + limit) < allPokemonsList.length) {
        nextButton.setAttribute("class", active);
      } else if (offset > 0 && (offset + limit) > allPokemonsList.length){
        nextButton.setAttribute("class", inactive);
      }

      if (offset === 0 && allPokemonsList.length <= limit) {
        previousButton.setAttribute("class", inactive);
        nextButton.setAttribute("class", inactive);
      }
      this.updatePaginationCount();
    },
    updatePaginationCount: function () {
      const target = document.getElementById("page");
      const currentPage = Math.ceil((offset + limit)/limit);
      const totalPages = Math.ceil(allPokemonsList.length/limit) || 1;

      target.innerText = `Page ${currentPage} of ${totalPages}`;
    }
  };
})();
