const host = window.location.hostname;
if(host != "localhost" && host != "127.0.0.1" && host != "0.0.0.0")
{
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-L5QJ6RCCZZ');
}