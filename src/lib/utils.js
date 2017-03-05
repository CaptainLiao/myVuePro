

const utils = {
  getAjax(method, url, opts, cb) {
    $('body').removeClass('panel-closing')
    $.showPreloader();
    $(".content-padded").hide();
    this.axios({
      method: method,
      url: url,
      data: opts || '',
    }).then((res) => {

      $.hidePreloader();
      $(".content-padded").show();
      console.log(res)
      if(cb && cb instanceof Function) {
        cb(res)
      }
    }).catch((err) => {
      $.hidePreloader();
      console.log(err)
      $.alert(err)
    })
  },
  transformDate(date) {
    let time = (new Date().getTime() - new Date(date).getTime()) / 1000;
    let str = '';
    if (time < 10) {
      str = time + "刚刚";
    }else if (time < 60 ) {
      str = time + "秒前";
    }else if (time < 3600) {
      str = parseInt(time / 60) + "分钟前";
    }else if(time < 24 * 3600) {
      str = parseInt(time / 3600) + "小时前";
    }else if(time < 30*24 * 3600) {
      str = parseInt(time / (24*3600)) + "天前";
    }else if(time < 12*30*24 * 3600) {
      str = parseInt(time / (30*24 * 3600)) + "月前";
    }else if(time > 12*30*24 * 3600) {
      str = parseInt(time / (12 * 30*24 * 3600)) + "年前";
    }
    return str;
  }
};

export default utils;
