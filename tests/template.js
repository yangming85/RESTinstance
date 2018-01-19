function jsDiff(elementId) {
  var displayParent = $("#" + elementId + " .diff");
  var found = $("#" + elementId + " .found").text();
  var expected = $("#" + elementId + " .expected").text();
  var diff = JsDiff.diffLines(found, expected);
  var fragment = document.createDocumentFragment();
  diff.forEach(function(part){
    // green for additions, red for deletions
    // grey for common parts
    color = part.added ? 'green' :
      part.removed ? 'red' : 'grey';
    span = document.createElement('span');
    span.style.color = color;
    span.appendChild(document
      .createTextNode(part.value));
    fragment.appendChild(span);
  });
  displayParent.replaceWith(fragment);
};

(function() {
  _old_toggleKeyword = window.toggleKeyword;

  window.toggleKeyword = function(id) {
    _old_toggleKeyword(id);
    jsDiff(id);

  }
})();