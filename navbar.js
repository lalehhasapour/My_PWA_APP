// جاوااسکریپت برای بارگذاری فایل HTML نوار ناوبری
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        feather.replace(); // فعال‌سازی آیکون‌های Feather بعد از لود شدن HTML
    });// جاوااسکریپت برای بارگذاری فایل HTML نوار ناوبری
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        feather.replace(); // فعال‌سازی آیکون‌های Feather بعد از لود شدن HTML
    });