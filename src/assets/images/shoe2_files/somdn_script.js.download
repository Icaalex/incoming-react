(function($) {

  /**
   * Scripts relating to adding/removing the "loading" class which some themes use
   */

  $('body').on('click', '.somdn-download-button:not(.somdn-checkbox-submit), .somdn-download-archive', function (e) {
    $(this).addClass('loading');
  });

  $('body').on('click', '.somdn-download-button, .somdn-download-archive', function (e) {
    var element = $(this);
    setTimeout(
      function() {
        if (element.hasClass('loading')) {
          element.removeClass('loading');
          //console.log('element.removeClass');
        }
      },
    2000);
  });

  /**********************************************************************/

  /**
   * Scripts relating to download buttons that are actually anchor elements
   */

  $('body').on('click', 'a.somdn-download-archive', function (e) {
    e.stopImmediatePropagation();
    var form = $(this).closest('form.somdn-archive-download-form');
    form.submit();
    return false;
  });

  $('body').on('click', '.somdn-download-link', function (e) {
    e.stopImmediatePropagation();
    var form = $(this).closest('form');
    form.submit();
    return false;
  });

  /**********************************************************************/

  /**
   * Scripts relating to the multiple file checkbox form
   */

  $('body').on('click', '.somdn-checkbox-form .somdn-checkbox-submit', function (e) {
    var form = $(this).closest('form');
    if ($(form).find('input[type="checkbox"]:checked').length == 0) {
      e.preventDefault();
      $('.somdn-form-validate').css('display', 'block');
    } else {
      $('.somdn-form-validate').css('display', 'none');
      $(this).addClass('loading');
    }
  });

  $('body').on('click', '.somdn-select-all-wrap input[type="checkbox"]', function (e) {
    var c = this.checked;
    var form = $(this).closest('form');
    $(form).find('.somdn-checkboxes-wrap input[type="checkbox"]').prop('checked', c);
  });

  $('body').on('click', '.somdn-checkbox-form .somdn-checkbox-form-checkbox', function (e) {
    var form = $(this).closest('form');
    var checkboxes = $(form).find('.somdn-checkbox-form-checkbox');
    var checked_count = $(form).find('.somdn-checkbox-form-checkbox:checked').length;// How many checkboxes currently checked
    var count = checkboxes.length;// How many checkboxes in total
    if (checked_count < count) {
      $(form).find('.somdn-checkbox-all').prop('checked', false);
    } else {
      $(form).find('.somdn-checkbox-all').prop('checked', true);
    }
  });

  /**********************************************************************/

  /**
   * Quick View scripts
   */

  $('body').on('click', '.somdn-qview-link', function (e) {
    var prod_wrap = $(this).closest('li.product');
    if (qview_active()) {
      e.preventDefault();
      somdn_open_qview(prod_wrap, event);
    } else {
      // Do nothing
    }
  });

  /**
   * Check if Quick View is active globally
   *
   * @return bool
   */
  function qview_active() {
    var qview_enabled = somdn_script_params.somdn_qview_active;
    if (qview_enabled) {
      return true;
    } else {
      return false;
    }  
  }

  /**
   * Check if Quick View is active on the current page
   *
   * @return bool
   */
  function qview_active_page(form) {
    var qview_enabled = somdn_script_params.somdn_qview_active;
    if (qview_enabled) {
      return true;
    } else {
      return false;
    }  
  }

  /**
   * Open the Quick View modal
   */
  function somdn_open_qview(prod_wrap, event) {

    //$(prod_wrap).addClass('somdn-form-email-capture');

    var the_qview_wrap = $(prod_wrap).find('.somdn-qview-wrap');

    $('body').addClass('somdn-qview-open');
    $(the_qview_wrap).addClass('open');

    $('body').trigger('somdn_open_qview', [ prod_wrap, event ]);

  }

  /**
   * Close the Quick View modal
   */
  function somdn_close_qview(prod_wrap, event) {

    //$(prod_wrap).removeClass('somdn-form-email-capture');
    $(prod_wrap).find('.somdn-checkbox-form-checkbox, .somdn-checkbox-all').prop('checked', false);
    $(prod_wrap).find('.somdn-qview-wrap').removeClass('open');
    $('body').removeClass('somdn-qview-open');

    $('body').trigger('somdn_close_qview', [ prod_wrap, event ]);

  }

  /**
   * Two events that close the Quick View modal
   * 1. Clicking the X in the top right corner of the modal
   * 2. Clicking anywhere outside the modal when it is open
   */
  $('body').on('click', '.somdn-qview-wrap .somdn-qview-close', function (event) {
    var prod_wrap =  $(this).closest('li.product');
    somdn_close_qview(prod_wrap, event);
  });

  $(document).on('click', '.somdn-qview-wrap', function(event) {
    var prod_wrap = $(this).closest('li.product');
    somdn_close_qview(prod_wrap, event);
  }).on('click', '.somdn-qview-window', function(e) {
      e.stopPropagation();
  });

  /**********************************************************************/

})(jQuery);
