$(document).ready(function() {
  $(".timeLine-arrow").on("click", function(){
    var block_els = $("#timeLine").find(".nav-link");

    var index = block_els.index( $('button.nav-link.active') );
    var prev_index = index - 1;
    var next_index = index + 1;

    if (prev_index == -1) {
      var prev_el = '';
    } else {
      var prev_el = block_els[prev_index];
    }

    if (next_index > block_els.length-1) {
      var next_el = '';
    } else {
      var next_el = block_els[next_index];
    }

    if (($(this).attr('id') == 'timeLine-prev')&(prev_el != '')){
      prev_el.click();
    }
    if (($(this).attr('id') == 'timeLine-next')&(next_el != '')){
      next_el.click();
    }
  });


  $('.form-control').click(function(event) {
    placeholderCheck($(this));
  });
  $('.form-select').click(function(event) {
    placeholderCheck($(this));
  });
  $('.form-control').keyup(function (event){
    placeholderCheck($(this));
  });

  function placeholderCheck(el){
    var val = el.val();
    var myId = el.attr('id');

    if (val != "" ){
      $('label[for='+myId+']').hide();
    } else {
      $('label[for='+myId+']').show();
    }
  }

});
