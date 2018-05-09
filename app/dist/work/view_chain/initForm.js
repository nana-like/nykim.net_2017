(function ($) { 
  window.fnames = new Array(); window.ftypes = new Array(); 
  var $form = $("#reserveForm");
  $form.find('input').each(
    function(index,element){
      fnames[index] = element.name;
      ftypes[index] = element.type;
    }
  )
}(jQuery));