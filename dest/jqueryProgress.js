jQuery.fn.extend({
  jqueryProgress : function(args){
    args = args || {};
    function checkType(element){
      return typeof element != typeof undefined;
    }
    var progressDiv = $(this);
    if(progressDiv.hasClass('progress-success')){
      args.progressColor = '#5cb85c';
    }else if(progressDiv.hasClass('progress-danger')){
      args.progressColor = '#d9534f';
    }else if(progressDiv.hasClass('progress-warning')){
      args.progressColor = '#f0ad4e';
    }else if(progressDiv.hasClass('progress-info')){
      args.progressColor = '#5bc0de';
    }
    var Progress = 
        (checkType(progressDiv.attr('data-progress'))) 
        ? progressDiv.attr('data-progress') : (checkType(args.progress)) ? args.progress : '50%';
    var align = 
        (checkType(progressDiv.attr('data-align'))) 
        ? progressDiv.attr('data-align') : (checkType(args.align)) ? args.align : 'center';
    var background = 
        (checkType(progressDiv.attr('data-background')))
        ? progressDiv.attr('data-background') : (checkType(args.background)) ? args.background : '#f5f5f5';
    var color = 
        (checkType(progressDiv.attr('data-color'))) 
        ? progressDiv.attr('data-color') : (checkType(args.color)) ? args.color : '#fff';
    var progressColor = 
        (checkType(progressDiv.attr('data-progress-color'))) ? progressDiv.attr('data-progress-color') : (checkType(args.progressColor)) ? args.progressColor : '#337ab7';
    var width = 
        (checkType(progressDiv.attr('data-width'))) 
        ? progressDiv.attr('data-width') : (checkType(args.width)) ? args.width : '';
    var height = 
        (checkType(progressDiv.attr('data-height'))) 
        ? progressDiv.attr('data-height') : (checkType(args.height)) ? args.height : '20px';
    progressDiv.html('<div><span>'+Progress+'</span></div>');
    progressDiv.css({
      width: width,
      height: height,
      background: background,
      color: color
    });
    progressDiv.children('div').css({
      'text-align': align,
      'line-height': height,
      'width': Progress,
      'background': progressColor,
      'height': '100%'
    });
    progressDiv.children('div span').css({
      'font-size': '16px'
    });
  }
});