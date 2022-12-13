var hurl = window.location.href;
if (hurl.indexOf('err=true') != -1) {
    alert('Invalid account# or password ')
    $("<a style='color:#000; margin-left:30px;' href='https://www.customfit.me/lcfforgotpass.aspx'>Forgot your password?</a>").insertAfter(".wrap-login100-form-btn");
}
$(document).ready(function () {
    $('a').each(function () {
        var oldUrl = $(this).attr("href"); // Get current url
        if ((oldUrl.indexOf("./index.html") &&
        oldUrl.indexOf("./accessibility") && 
        oldUrl.indexOf("./ada-styles") && 
        oldUrl.indexOf("./aetrex-orthotics") && 
        oldUrl.indexOf("./aetrex-scanner") && 
        oldUrl.indexOf("./automated-data-feed") &&
        oldUrl.indexOf("./blog/") && 
        oldUrl.indexOf("./blog/boots-and-ladders-safety") &&
        oldUrl.indexOf("./blog/foundation-of-success") &&
        oldUrl.indexOf("./blog/how-long-boots-last") &&
        oldUrl.indexOf("./blog/our-new-logo") &&
        oldUrl.indexOf("./blog/plantar-fasciitis") &&
        oldUrl.indexOf("./blog/right-safety-boots") &&
        oldUrl.indexOf("./blog/true-fit-launch") &&
        oldUrl.indexOf("./blog/whats-in-your-boots") &&
        oldUrl.indexOf("./blog/work-shoe-fits") &&
        oldUrl.indexOf("./breakdown-dangers") && 
        oldUrl.indexOf("./command-center") && 
        oldUrl.indexOf("./compression-socks") && 
        oldUrl.indexOf("./contact") && 
        oldUrl.indexOf("./electronic-invoicing") && 
        oldUrl.indexOf("./email") && 
        oldUrl.indexOf("./faq") && 
        oldUrl.indexOf("./fitting-events") && 
        oldUrl.indexOf("./footwear") && 
        oldUrl.indexOf("./foundation-of-wellness") && 
        oldUrl.indexOf("./history") && 
        oldUrl.indexOf("./linkedin") && 
        oldUrl.indexOf("./login") && 
        oldUrl.indexOf("./making-our-mark") && 
        oldUrl.indexOf("./payment-options") && 
        oldUrl.indexOf("./privacy-policy") && 
        oldUrl.indexOf("./safety-pledge") && 
        oldUrl.indexOf("./size-guide") && 
        oldUrl.indexOf("./sms") && 
        oldUrl.indexOf("./team") && 
        oldUrl.indexOf("./terms-and-conditions") && 
        oldUrl.indexOf("./testimonials") && 
        oldUrl.indexOf("./true-fit") && 
        oldUrl.indexOf("./unhealthy-feet") && 
        oldUrl.indexOf("./warranty") && 
        oldUrl.indexOf("./wellness") && 
        oldUrl.indexOf("./why-new-orthotics")) != -1) {
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