(function(global) {

  var TopicsUtil = function (pagePrefix, dataPrefix) {
    this.pagePrefix = pagePrefix;
    this.dataPrefix = dataPrefix;
  }

  TopicsUtil.prototype.getTopics = function (currentPage, zoneId, menuKey, submenuKey, callback) {
    var appId = $('[name=app-id]').val();
    if (typeof(submenuKey) === 'function') callback = submenuKey;
    if (menuKey === '' && submenuKey === '') {
      return callback('参数错误');
    } else {
      $.post(this.dataPrefix + '/topics',
        {
          appId: appId,
          _csrf: $('#_csrf').val(),
          currentPage: currentPage,
          menuKey: menuKey,
          submenuKey: submenuKey,
          zoneId: zoneId
        },
        function(result) {
          if (result.err) callback(result.err);
          else callback(null, result.data, result.authors, result.pages, result.currentPage);
      });
    }
  }

  TopicsUtil.prototype.getGoodTopics = function (currentPage, zoneId, menuKey, submenuKey, callback) {
    var appId = $('[name=app-id]').val();
    if (typeof(submenuKey) === 'function') callback = submenuKey;
    if (menuKey === '' && submenuKey === '') {
      return callback('参数错误');
    } else {
      $.post(this.dataPrefix + '/topics',
        {
          appId: appId,
          _csrf: $('#_csrf').val(),
          currentPage: currentPage,
          menuKey: menuKey,
          submenuKey: submenuKey,
          zoneId: zoneId,
          good: true
        },
        function(result) {
          if (result.err) callback(result.err);
          else callback(null, result.data, result.authors, result.pages, result.currentPage);
      });
    }
  }

  global.TopicsUtil = TopicsUtil;
})(this);