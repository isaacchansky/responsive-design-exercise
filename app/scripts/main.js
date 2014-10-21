function setLeadContainerSize() {
    'use strict';
    $('[role="lead-container"]').css({
        minWidth: $(window).width()+'px',
        minHeight: $(window).height()+'px'
    });
}


$(document).ready(function(){
    'use strict';
    // initialize
    setLeadContainerSize();

    // Set event handlers
    $(window).resize(setLeadContainerSize);
});
