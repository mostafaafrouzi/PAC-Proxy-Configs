
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


# آموزش استفاده از فایل‌های PAC برای دور زدن سانسور و حفظ حریم خصوصی

فایل‌های PAC (Proxy Auto-Config) به شما امکان می‌دهند که ترافیک اینترنتی خود را از طریق یک سرور پروکسی هدایت کنید، به طوری که دسترسی شما به وب‌سایت‌های مختلف به روشی امن و بدون سانسور انجام شود. این فایل‌ها معمولاً برای جلوگیری از محدودیت‌های فیلترینگ، تحریم‌ها و بهبود امنیت و حریم خصوصی در اتصال اینترنتی استفاده می‌شوند.

در این مقاله، نحوه استفاده از فایل‌های PAC مختلف را به همراه افزونه Proxy SwitchyOmega در مرورگر کروم و همچنین نحوه استفاده از آن‌ها در دستگاه‌های اندروید و ویندوز آموزش می‌دهیم.

**نکته مهم:** فایل‌های PAC مختلف، سرورهایی در کشورهای مختلف دارند. این موضوع می‌تواند بر سرعت، امنیت و دسترسی به وب‌سایت‌های مختلف تاثیر بگذارد. در ادامه، به معرفی برخی از این فایل‌ها و کشورهایی که سرورهای آن‌ها قرار دارند، پرداخته خواهد شد. بر اساس نیاز خود (از نظر سرعت یا دسترسی به محتوای خاص در کشور خاص)، شما می‌توانید یک گزینه مناسب را انتخاب کنید.

## 1. لوکیشن فایل‌های PAC و کشور سرور

در اینجا، لوکیشن سرور و کشورهایی که فایل‌های PAC از آن‌ها می‌آیند آورده شده است:

1. **کانادا - سرور کانادا**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac

2. **فرانسه - سرور فرانسه**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/France.pac

3. **آلمان - سرور آلمان**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Germany.pac

4. **ایران - سرور ایران**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/msmh.pac

5. **هلند - سرور هلند**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Netherland.pac

6. **سنگاپور - سرور سنگاپور**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Singapore.pac

7. **بریتانیا - سرور بریتانیا**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/UK.pac

8. **ایالات متحده - شرق - سرور ایالات متحده (شرق)**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/US-East.pac

9. **ایالات متحده - غرب - سرور ایالات متحده (غرب)**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/US-West.pac

**پیشنهاد:** بسته به نیاز خود، کشور یا سرور مورد نظر را انتخاب کنید:
- برای دسترسی به محتوای آمریکای شمالی (مثل کانادا و ایالات متحده) از فایل‌های **Canada.pac** یا **US-East.pac / US-West.pac** استفاده کنید.
- برای دسترسی به محتوای اروپایی (مثل فرانسه و آلمان)، **France.pac** یا **Germany.pac** گزینه‌های مناسبی هستند.
- برای دسترسی به محتوای آسیایی، **Singapore.pac** بهترین انتخاب خواهد بود.

## 2. استفاده از فایل‌های PAC در مرورگر کروم با افزونه Proxy SwitchyOmega

### مرحله 1: نصب افزونه Proxy SwitchyOmega در کروم
1. **باز کردن گوگل کروم:** ابتدا گوگل کروم را باز کنید.
2. **نصب افزونه Proxy SwitchyOmega:**
   - به لینک زیر بروید:
     [Proxy SwitchyOmega در کروم وب استور](https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped)
   - روی دکمه "Add to Chrome" کلیک کنید.
   - پس از نصب، آیکون افزونه در بالای صفحه کروم ظاهر می‌شود.

### مرحله 2: تنظیم Proxy SwitchyOmega برای استفاده از فایل‌های PAC
1. **باز کردن تنظیمات افزونه:**
   - روی آیکون افزونه Proxy SwitchyOmega در بالای صفحه کروم کلیک کنید.
   - سپس "Options" را انتخاب کنید.
   
2. **اضافه کردن پروفایل جدید:**
   - در صفحه تنظیمات، گزینه "New Profile" را انتخاب کنید.
   - یک نام برای پروفایل خود وارد کنید (مثلاً "Canada PAC").
   - در بخش "Proxy Server" گزینه "PAC" را انتخاب کنید.

3. **وارد کردن آدرس فایل PAC:**
   - در قسمت "PAC File URL"، آدرس یکی از فایل‌های PAC مورد نظر را وارد کنید. برای مثال:
     ```
     https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac
     ```
   - در صورتی که نیاز به استفاده از فایل‌های دیگر دارید، آدرس آن‌ها را به ترتیب وارد کنید.

4. **ذخیره تنظیمات:**
   - بعد از وارد کردن URL فایل PAC، بر روی "Save" کلیک کنید.
   - حالا پروفایل جدید شما در تنظیمات افزونه ذخیره می‌شود.

### مرحله 3: فعال‌سازی پروکسی
1. **فعال کردن پروکسی:**
   - به صفحه اصلی کروم برگردید و دوباره روی آیکون افزونه Proxy SwitchyOmega کلیک کنید.
   - پروفایل خود را از لیست پروفایل‌ها انتخاب کنید (مثلاً "Canada PAC").
   - حالا تمامی ترافیک اینترنتی شما از طریق سرور پروکسی فایل PAC هدایت می‌شود.

### مرحله 4: آزمایش و بررسی
1. **آزمایش اتصال:** 
   - برای آزمایش اینکه تنظیمات به درستی اعمال شده‌اند، به یک وب‌سایت فیلترشده یا تحریمی مراجعه کنید.
   - اگر بدون مشکل به آن دسترسی پیدا کردید، تنظیمات شما به درستی کار می‌کنند.

## 3. استفاده از فایل‌های PAC در ویندوز

### مرحله 1: تنظیمات پروکسی در ویندوز
1. **باز کردن تنظیمات پروکسی ویندوز:**
   - وارد "Settings" شوید.
   - به بخش "Network & Internet" بروید.
   - روی "Proxy" کلیک کنید.
   
2. **فعال‌سازی پروکسی با استفاده از فایل PAC:**
   - در بخش "Automatic proxy setup"، گزینه "Use setup script" را فعال کنید.
   - در کادر "Script Address"، آدرس فایل PAC خود را وارد کنید. برای مثال:
     ```
     https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac
     ```

3. **ذخیره تنظیمات:**
   - تغییرات را ذخیره کنید و ویندوز را برای اعمال تغییرات مجدداً راه‌اندازی کنید.

### مرحله 2: آزمایش و بررسی
1. برای تست، به یک وب‌سایت فیلترشده یا تحریمی وارد شوید و ببینید که آیا می‌توانید به آن دسترسی پیدا کنید یا نه.

## 4. استفاده از فایل‌های PAC در اندروید

### مرحله 1: نصب اپلیکیشن ProxyDroid (یا هر اپلیکیشن مشابه)
1. **دانلود و نصب ProxyDroid:**
   - به فروشگاه گوگل پلی بروید و اپلیکیشن "ProxyDroid" را جستجو و نصب کنید.
   
2. **تنظیمات پروکسی در ProxyDroid:**
   - وارد اپلیکیشن ProxyDroid شوید.
   - گزینه "PAC" را انتخاب کنید.
   - در قسمت "PAC URL"، آدرس فایل PAC خود را وارد کنید.
     ```
     https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac
     ```

3. **فعال‌سازی پروکسی:**
   - پروکسی را فعال کرده و تغییرات را ذخیره کنید.
   
### مرحله 2: آزمایش و بررسی
1. برای تست، به یک وب‌سایت فیلترشده مراجعه کنید و بررسی کنید که آیا می‌توانید به آن دسترسی پیدا کنید یا نه.


---

## مشارکت
برای پیشنهاد تغییرات، درخواست‌های خود را ارسال کنید.
