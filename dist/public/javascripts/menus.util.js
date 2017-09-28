(function(global) {

  var MenusUtil = function (pagePrefix, dataPrefix) {
    this.pagePrefix = pagePrefix;
    this.dataPrefix = dataPrefix;
  }

  // zone

  MenusUtil.prototype.getFullZones = function (all, callback) {
    var appId = $('[name=app-id]').val();
    $.post(this.dataPrefix + '/zone/full',
      {
        appId: appId,
        all: all,
        _csrf: $('#_csrf').val()
      },
      function(result) {
        if (result.err) callback(result.err);
        else callback(null, result.data);
    })
  }

  MenusUtil.prototype.getZones = function (all, callback) {
    var appId = $('[name=app-id]').val();
    $.post(this.dataPrefix + '/zone/data',
      {
        appId: appId,
        all: all,
        _csrf: $('#_csrf').val()
      },
      function(result) {
        if (result.err) callback(result.err);
        else callback(null, result.data);
    })
  }

  MenusUtil.prototype.addZone = function (key, value, callback) {
    var appId = $('[name=app-id]').val();
    $.post(this.dataPrefix + '/zone/add',
      {
        appId: appId,
        key: key, value: value,
        _csrf: $('#_csrf').val()
      },
      function(result) {
        if (result.err) callback(result.err);
        else callback(null, result.data);
      });
  }

  MenusUtil.prototype.updateZone = function (zone, callback) {
    var appId = $('[name=app-id]').val();
    $.post(dataPrefix + '/zone/' + zone._id + '/update',
      {
        appId: appId,
        key: zone.key,
        value: zone.value,
        enable: zone.enable,
        weight: zone.weight,
        mustReview: zone.mustReview,
        audioAttachment: zone.audioAttachment,
        href: zone.href,
        icon: zone.icon,
        createText: zone.createText,
        _csrf: $('#_csrf').val()
      },
      function (result) {
        if (result.err) callback(result.err);
        else callback(null, result.message);
    });
  }

  MenusUtil.prototype.deleteZone = function (zone, callback) {
    var appId = $('[name=app-id]').val();
    $.post(dataPrefix + '/zone/' + zone._id + '/delete',
      {
        appId: appId
      },
      function (result) {
      if (result.err) callback(result.err);
      else callback(null, result.message);
    });
  }

  // menu

  MenusUtil.prototype.getMenus = function (opt, callback) {
    var appId = $('[name=app-id]').val();
    if (typeof(opt) === 'function') callback = opt;
    opt._csrf = $('#_csrf').val();
    opt.appId = appId;
    $.post(this.dataPrefix + '/menu/data', opt,
      function(result) {
        if (result.err) callback(result.err);
        else callback(null, result.data);
    })
  }

  MenusUtil.prototype.addMenu = function (id, key, value, callback) {
    var appId = $('[name=app-id]').val();
    $.post(this.dataPrefix + '/menu/add',
      {appId: appId, zoneId: id, key: key, value: value, _csrf: $('#_csrf').val()},
      function(result) {
        if (result.err) callback(result.err);
        else callback(null, result.data);
      });
  }

  MenusUtil.prototype.deleteMenu = function (menu, callback) {
    var appId = $('[name=app-id]').val();
    $.post(dataPrefix + '/menu/' + menu._id + '/delete', {appId: appId}, function (result) {
        if (result.err) callback(result.err);
        else callback(null, result.message);
    });
  }

  MenusUtil.prototype.updateMenu = function (menu, callback) {
    var appId = $('[name=app-id]').val();
    $.post(dataPrefix + '/menu/' + menu._id + '/update',
      {
      appId: appId,
        key: menu.key,
       value: menu.value,
       enable: menu.enable,
       weight: menu.weight,
       _csrf: $('#_csrf').val()},
      function (result) {
        if (result.err) callback(result.err);
        else callback(null, result.message);
    });
  }

  // submenu

  MenusUtil.prototype.getSubmenusByMenuKey = function (menuKey, callback) {
    var appId = $('[name=app-id]').val();
    $.post(this.dataPrefix + '/submenu/data',
      {
        appId: appId,
        _csrf: $('#_csrf').val(),
        menuKey: menuKey
      },
      function(result) {
        if (result.err) callback(result.err);
        else callback(null, result.data);
    })
  }

  MenusUtil.prototype.deleteSubmenu = function (submenu, callback) {
    var appId = $('[name=app-id]').val();
    $.post(dataPrefix + '/submenu/' + submenu._id + '/delete',
      {
        appId: appId
      },
      function (result) {
          if (result.err) callback(result.err);
          else callback(null, result.message);
    });
  }

  MenusUtil.prototype.updateSubmenu = function (submenu, callback) {
    var appId = $('[name=app-id]').val();
    $.post(dataPrefix + '/submenu/' + submenu._id + '/update',
      {
        appId: appId,
        key: submenu.key,
        value: submenu.value,
        enable: submenu.enable,
        weight: submenu.weight,
        _csrf: $('#_csrf').val()
      },
      function (result) {
        if (result.err) callback(result.err);
        else callback(null, result.message);
    });
  }

  global.MenusUtil = MenusUtil;
})(this);