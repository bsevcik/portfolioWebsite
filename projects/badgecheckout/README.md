# badge_check_out
This is a website intended to allow a Security Guard to track who has checked out a badge.

Early versions are done through HTML5, Javascript, and CSS3 and only function on the local webpage. This unfortunately means that the data is reset any time the page is reset.

Using the chrome extension below will allow for overwriting data. For now, you can click to download a .csv file. The automatic download of data into a .csv file is currently commented out because it's pretty annoying, but it could be set to download (and optionally overwritten by using the chrome extension) every time a user checks out, returns a badge, or clicks the Export to .csv button. 
https://chrome.google.com/webstore/detail/downloads-overwrite-alrea/lddjgfpjnifpeondafidennlcfagekbp/related


Future goals:  

  ⋅⋅⋅*(in progress) CSS3 formatting to make it look better\
  ⋅⋅⋅*(complete) Fix clearing of data in table. Currently it is unreliable\
  ⋅⋅⋅*(complete) Ability to use enter button to submit\
  ⋅⋅⋅*(complete) Table formatting for submitted data\
  ⋅⋅⋅*(complete) Sort options by First Name, Last Name, Time in etc.\
  ⋅⋅⋅*Server side database to track information over time. Currently downloading data into csv sheets.\