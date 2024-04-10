/**
 * Plugin Name: WP In Post Ads by MyThemeShop
 * Author URI: https://mythemeshop.com/
 */
(function( $ ) {

	'use strict';

	$(function() {

		var viewed_ids = '';

		if ( $('.wpipa-container').length ) {

			$('.wpipa-container').each(function() {

				var $this= $(this),
					ad_id = $this.attr('data-id'),
					ab_variation = $this.attr('data-variation');

				if ( viewed_ids.indexOf( ad_id ) == -1 ) {

					viewed_ids = viewed_ids+','+ad_id;
				}

				if ( 'none' !== ab_variation ) {
					$.post( wpipaViews.url, {
						action: 'wpipa_add_impression',
						ad_id: ad_id,
						ab_variation: ab_variation
					});
				}
				
			});

			$.post( wpipaViews.url, {
				action: 'mts_ads_view_count',
				ids: viewed_ids
			});
		}

		// Record Click
		$(document).on('click', '.wpipa-container', function(event) {

			// Link
			//if ( $(event.target).closest('a').length ) {
				var $this= $(this),
					ad_id = $this.attr('data-id'),
					ab_variation = $this.attr('data-variation');

				if ( 'none' !== ab_variation ) {

					$.post( wpipaViews.url, {
						action: 'wpipa_add_click',
						ad_id: ad_id,
						ab_variation: ab_variation
					});
				}
			//}
		});
	});

})( jQuery );