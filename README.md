amr-bookmarklet
======

Saves a file containing the number of chapters left to read to catch up on each series followed on All Mangas Reader It's meant to be used as a bookmarklet. The code itself can be saved as a DevTools Snippet too.

To use as a bookmarklet use the following in your bookmark URL:

	javascript:(function(){var e="mangaSeries"+Date.now()+".txt",c,b="";$(".new .custom-select select").each(function(){var a=$(this).parent().parent().parent().children(".mgtitle").children(".mgtitlehead").children(".mgname").text();a?c=a:a=c;b+=a+"##"+this.selectedIndex+"\n"});"object"===typeof b&&(b=JSON.stringify(b,void 0,4));var f=new Blob([b],{type:"text/json"}),d=document.createEvent("MouseEvents"),a=document.createElement("a");a.download=e;a.href=window.URL.createObjectURL(f);a.dataset.downloadurl=["text/json",a.download,a.href].join(":");d.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null);a.dispatchEvent(d)})();

Then open the AMR Reading List in a new tab (set in the AMR Options) and click on your bookmarklet to save the file.


Notes
-----

* This will only work if you have the AMR Reading List as the active tab.
* You should wait for the reading list to be fully loaded before saving the file.
