/**
 * Init Elements in Elementor Frontend
 *
 */
;(function($, window, document, undefined){
    "use strict";

    $(window).on('elementor/frontend/init', function (){
        // Before after element

        if ( elementorFrontend.isEditMode() ) {

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux-before-after.default', $.fn.AuxinBeforeAfterInit );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux-gallery.default', $.fn.AuxinTriggerResize );
            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux-gallery.default', $.fn.AuxinIsotopeImageLayoutsInit );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_accordion.default', $.fn.AuxinAccordionInit );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_tabs.default', $.fn.AuxinLiveTabsInit );


            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_video.default', function( $scope ){ window.wp.mediaelement.initialize() } );
            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_audio.default', function( $scope ){ window.wp.mediaelement.initialize() } );


            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_recent_portfolios_grid.default',
                function( $scope ){ $.fn.AuxinIsotopeLayoutInit( $('body') ); }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_recent_portfolios_masonry.default',
                function( $scope ){ $.fn.AuxinIsotopeLayoutInit( $('body') ); }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_recent_portfolios_tile.default',
                function( $scope ){ $.fn.AuxinIsotopeTilesInit( $('body') ); }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_recent_portfolios_grid_carousel.default',
                function( $scope ){ $.fn.AuxinCarouselInit( $('body') ); }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_recent_news_grid.default',
                function( $scope ){ $.fn.AuxinCarouselInit( $('body') ); }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_shopping_cart.default',
                function( $scope ){
                    $.fn.AuxinDropdownEffectInit( $('body') );
                    $.fn.AuxinCartCanvasInit( $('body') );
                }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_menu_box.default',
                function( $scope ){
                    $scope.find('.aux-master-menu').mastermenu();
                    $.fn.AuxinMobileMenuInit( $scope );
                }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_image.default', function($scope) {
               $.fn.AuxinDynamicDropshadowInit($scope);
               $.fn.AuxinTiltElementInit($scope);
            });

            elementorFrontend.hooks.addAction( 'frontend/element_ready/global',
                function( $scope ) {
                    $.fn.AuxinPageCoverAnimationInit( $scope );
                    $.fn.AuxinToggleListInit( $scope );
                    $.fn.AuxinAppearAnimationsInit( $scope );
                }
            );

            elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_search_box.default', function( $scope ) {
                $.fn.AuxinElementorSearchElement( $scope );
                $(window).on( 'resize', function(){
                    $.fn.AuxinElementorSearchElement( $scope );
                });
            });

        }

    });

})(jQuery, window, document);
