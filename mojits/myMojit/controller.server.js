YUI.add('myMojit', function(Y) {
  Y.mojito.controller = {

      index: function(ac) {
          ac.done('Hello, world. I have created my first Mojito app at ' + (new Date()) + '.');
      }

  };
});