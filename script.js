// Cookie Consent Banner
window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-consent-banner').style.display = 'block';
    }

    document.getElementById('accept-cookies').onclick = function() {
        localStorage.setItem('cookiesAccepted', true);
        document.getElementById('cookie-consent-banner').style.display = 'none';
    };
};
