function setLeadContainerSize(){"use strict";$('[role="lead-container"]').css({minWidth:$(window).width()+"px",minHeight:$(window).height()+"px"})}$(document).ready(function(){"use strict";setLeadContainerSize(),$(window).resize(setLeadContainerSize)});