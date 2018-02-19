// JavaScript Document

( function popup() {
	$( document ).ready( function() {
		$("a[rel='pop-up']").click(function () {
      		    var features = "height=600,width=800,scrollTo,resizable=1,scrollbars=1,location=0";
      		    newwindow=window.open(this.href, 'Popup', features);
      		    return false;
 		});
		$("a[rel='pop-up2']").click(function () {
      		    var features = "height=640,width=427,scrollTo,resizable=1,scrollbars=1,location=0";
      		    newwindow=window.open(this.href, 'Popup', features);
      		    return false;
 		});
		$("a[rel='pop-up3']").click(function () {
      		    var features = "height=427,width=640,scrollTo,resizable=1,scrollbars=1,location=0";
      		    newwindow=window.open(this.href, 'Popup', features);
      		    return false;
 		});
	} );
}() );
