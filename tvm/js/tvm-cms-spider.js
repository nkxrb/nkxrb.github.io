var spider = (function () {
  var api = "";

  function endpoint(params) {
    var parts = [];
    for (var key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
      }
    }
    return api + (api.indexOf("?") >= 0 ? "&" : "?") + parts.join("&");
  }

  return {
    init: function (ext) {
      api = String(ext || "").trim();
    },

    searchContent: function (keyword) {
      return Kidar.request(endpoint({ ac: "detail", wd: keyword }));
    },

    detailContent: function (ids) {
      var id = Array.isArray(ids) ? ids[0] : ids;
      return Kidar.request(endpoint({ ac: "detail", ids: id }));
    },

    playerContent: function (_flag, id) {
      return JSON.stringify({
        parse: 0,
        url: id,
        header: {}
      });
    }
  };
})();
