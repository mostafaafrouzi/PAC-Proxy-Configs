
<div align="center">
  <a href="README.md"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" alt="فارسی" width="25"/> فارسی</a> |
  <a href="README_EN.md"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="English" width="25"/> English</a>
</div>

# PAC Files for Proxy Configuration

This repository contains PAC files for automatic proxy configuration, helping you bypass internet restrictions and improve your browsing experience.

## **Features**
- Automatic proxy setup to route traffic through specific servers.
- Compatible with various browsers and tools.
- Supports proxy management extensions like SwitchyOmega.

---

## **Using PAC Files in SwitchyOmega**

### 1. Install the Extension
- Install the extension from [Chrome Web Store](https://chromewebstore.google.com/detail/padekgcemlokbadohgkifijomclgjgif).
- Once installed, the extension icon will appear next to the browser address bar.

### 2. Configure PAC File
#### **Create a New Profile**
1. Click on the extension icon and open the **Dashboard**.
2. In the dashboard, select **Create Profile**.
3. Choose **PAC Script** and name your profile (e.g., `Custom PAC`).

#### **Enter PAC File URL**
1. After creating the profile, click **Edit Profile**.
2. Enter the URL of one of the PAC files below in the **PAC Script URL** field:
   - [Canada.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Canada.pac)
   - [France.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/France.pac)
   - [Germany.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Germany.pac)
   - [msmh.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/msmh.pac)
   - [Netherland.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Netherland.pac)
   - [Singapore.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/Singapore.pac)
   - [UK.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/UK.pac)
   - [US-East.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/US-East.pac)
   - [US-West.pac](https://github.com/mostafaafrouzi/PAC-Proxy-Configs/pac/US-West.pac)
3. Click **Apply Changes**.

#### **Activate the PAC Profile**
1. Go back to the SwitchyOmega main page.
2. Select the `Custom PAC` profile to activate it.

---

## **Using PAC Files for System-wide Proxy**

### **Windows**
1. Open Windows proxy settings:
   - Path: `Settings > Network & Internet > Proxy` or 
   - Path: `Control Panel > Internet Options > Connections > LAN Settings`
2. Enable **Use automatic configuration script**.
3. Enter the URL of one of the PAC files listed above.

### **Android**
#### **Method 1: Manual Setup in Wi-Fi**
1. Open the Wi-Fi settings on your phone.
2. Click on the connected network and select **Advanced**.
3. In the **Proxy** section:
   - Select **Manual**.
   - Enter the PAC file URL.

#### **Method 2: Use Proxy Apps**
Apps like **Postern** or **ProxyDroid** support using PAC files for system-wide proxy.

---

## Contribution
Feel free to submit pull requests or issues for improvements.
