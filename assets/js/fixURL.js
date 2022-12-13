
  var hurl = window.location.href;
  if (hurl.indexOf('err=true') != -1) {
      alert('Invalid account# or password ')
      $("<a style='color:#000; margin-left:30px;' href='https://www.customfit.me/lcfforgotpass.aspx'>Forgot your password?</a>").insertAfter(".wrap-login100-form-btn");
  }
  $(document).ready(function () {
      $('a').each(function () {
          var oldUrl = $(this).attr("href"); // Get current url
          if (oldUrl.indexOf("accessibility") != -1) {
              var newUrl = "https://www.customfit.me/" + oldUrl; // Create new url
              if (window.location.hostname.indexOf("dev.customfit") != -1) {
                  newUrl = "http://dev.customfit.me/" + oldUrl;
              }
              $(this).attr("href", newUrl); // Set herf value
          }
          else {
              if (oldUrl.indexOf("#") != -1) {
                  var newUrl = window.location.href + oldUrl; // Create new url
                  $(this).attr("href", newUrl); // Set herf value
              }
          }
      });
  });