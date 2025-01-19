
<div align="center">
  <a href="README.md"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" alt="فارسی" width="25"/> فارسی</a> |
  <a href="README_EN.md"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="English" width="25"/> English</a>
</div>

# فایل‌های PAC برای تنظیم پروکسی

این مخزن شامل فایل‌های PAC برای پیکربندی خودکار پروکسی است که به شما کمک می‌کند محدودیت‌های اینترنتی را دور بزنید و تجربه مرور خود را بهبود بخشید.

## **ویژگی‌ها**
- تنظیم خودکار پروکسی برای هدایت ترافیک به سرورهای مشخص.
- سازگار با مرورگرها و ابزارهای مختلف.
- پشتیبانی از افزونه‌های مدیریت پروکسی مانند SwitchyOmega.

---

## **آموزش استفاده در افزونه SwitchyOmega**

### ۱. نصب افزونه
- افزونه را از [Chrome Web Store](https://chromewebstore.google.com/detail/padekgcemlokbadohgkifijomclgjgif) نصب کنید.
- پس از نصب، آیکون افزونه در کنار نوار آدرس مرورگر نمایش داده می‌شود.

### ۲. تنظیم فایل PAC
#### **ایجاد یک پروفایل جدید**
1. روی آیکون افزونه کلیک کنید و وارد **Dashboard** شوید.
2. در صفحه داشبورد، گزینه **Create Profile** را انتخاب کنید.
3. نوع پروفایل را **PAC Script** انتخاب کرده و یک نام برای آن وارد کنید (مانند `Custom PAC`).

#### **وارد کردن فایل PAC**
1. پس از ایجاد پروفایل، گزینه **Edit Profile** را انتخاب کنید.
2. در فیلد **PAC Script URL**، آدرس یکی از فایل‌های PAC زیر را وارد کنید:
   - [Canada.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Canada.pac)
   - [France.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/France.pac)
   - [Germany.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Germany.pac)
   - [msmh.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/msmh.pac)
   - [Netherland.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Netherland.pac)
   - [Singapore.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Singapore.pac)
   - [UK.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/UK.pac)
   - [US-East.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/US-East.pac)
   - [US-West.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/US-West.pac)
3. روی دکمه **Apply Changes** کلیک کنید.

#### **فعال کردن پروفایل PAC**
1. به صفحه اصلی SwitchyOmega بازگردید.
2. پروفایل `Custom PAC` را انتخاب کنید تا به حالت فعال درآید.

---

## **استفاده از فایل PAC برای پروکسی کل سیستم**

### **ویندوز**
1. به تنظیمات پروکسی در ویندوز بروید:
   - مسیر: `Settings > Network & Internet > Proxy` یا 
   - مسیر: `Control Panel > Internet Options > Connections > LAN Settings`
2. گزینه **Use automatic configuration script** را فعال کنید.
3. آدرس یکی از فایل‌های PAC بالا را وارد کنید.

### **اندروید**
#### **روش اول: تنظیم دستی در Wi-Fi**
1. به تنظیمات Wi-Fi گوشی خود بروید.
2. روی شبکه‌ای که به آن متصل هستید کلیک کرده و گزینه **Advanced** را انتخاب کنید.
3. در بخش **Proxy**:
   - حالت **Manual** را انتخاب کنید.
   - آدرس فایل PAC را وارد کنید.

#### **روش دوم: استفاده از اپلیکیشن‌های پروکسی**
برنامه‌هایی مانند **Postern** یا **ProxyDroid** امکان استفاده از فایل‌های PAC را برای پروکسی کل سیستم فراهم می‌کنند.

---

## مشارکت
برای پیشنهاد تغییرات، درخواست‌های خود را ارسال کنید.
