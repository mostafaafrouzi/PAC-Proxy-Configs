<div align="center">
  <a href="README.md"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" alt="فارسی" width="25"/> فارسی</a> |
  <a href="README_EN.md"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="English" width="25"/> English</a>
</div>

# PAC Files for Proxy Configuration

This repository contains PAC files for automatic proxy configuration, which help you bypass internet restrictions and improve your browsing experience.

## **Features**
- Automatic proxy configuration to route traffic to specific servers.
- Compatible with various browsers and tools.
- Supports proxy management extensions such as SwitchyOmega.

---

# How to Use PAC Files for Bypassing Censorship and Enhancing Privacy

PAC (Proxy Auto-Config) files allow you to route your internet traffic through a proxy server, enabling secure and uncensored access to websites. These files are often used to bypass filtering restrictions, sanctions, and to enhance internet security and privacy.

In this article, we will teach you how to use different PAC files along with the Proxy SwitchyOmega extension in the Chrome browser, as well as how to use them on Android and Windows devices.

**Important Note:** Different PAC files have servers located in various countries, which can impact speed, security, and access to different websites. We will introduce some of these files and the countries where their servers are located. Based on your needs (speed or access to specific content from a particular country), you can select the most suitable option.

## 1. PAC File Locations and Server Countries

Here are the locations of the servers and the countries associated with the PAC files:

1. **Canada - Canadian Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac

2. **France - French Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/France.pac

3. **Germany - German Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Germany.pac

4. **Iran - Iranian Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/msmh.pac

5. **Netherlands - Dutch Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Netherland.pac

6. **Singapore - Singaporean Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Singapore.pac

7. **United Kingdom - UK Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/UK.pac

8. **United States - East - US (East) Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/US-East.pac

9. **United States - West - US (West) Server**  
   https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/US-West.pac

**Recommendation:** Depending on your needs, choose the appropriate country or server:
- For access to North American content (such as Canada and the USA), use the **Canada.pac** or **US-East.pac / US-West.pac** files.
- For access to European content (such as France and Germany), **France.pac** or **Germany.pac** are suitable options.
- For Asian content, **Singapore.pac** is the best choice.

## 2. Using PAC Files in Chrome with the Proxy SwitchyOmega Extension

### Step 1: Install the Proxy SwitchyOmega Extension in Chrome
1. **Open Google Chrome:** First, open Google Chrome.
2. **Install the Proxy SwitchyOmega Extension:**
   - Go to the following link:  
     [Proxy SwitchyOmega on Chrome Web Store](https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped)
   - Click "Add to Chrome".
   - After installation, the extension icon will appear in the upper-right corner of Chrome.

### Step 2: Configure Proxy SwitchyOmega to Use PAC Files
1. **Open the Extension Settings:**
   - Click the Proxy SwitchyOmega extension icon in the top-right corner of Chrome.
   - Then select "Options".
   
2. **Add a New Profile:**
   - In the settings page, select "New Profile".
   - Enter a name for your profile (e.g., "Canada PAC").
   - Under "Proxy Server", select "PAC".

3. **Enter the PAC File URL:**
   - In the "PAC File URL" section, enter the URL of one of the desired PAC files. For example:
     ```
     https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac
     ```
   - If you need to use other PAC files, enter their URLs accordingly.

4. **Save Settings:**
   - After entering the PAC file URL, click "Save".
   - Now your new profile will be saved in the extension settings.

### Step 3: Activate the Proxy
1. **Enable the Proxy:**
   - Go back to the Chrome main page and click the Proxy SwitchyOmega extension icon again.
   - Select your profile from the list (e.g., "Canada PAC").
   - Now, all your internet traffic will be routed through the proxy server specified in the PAC file.

### Step 4: Test and Verify
1. **Test the Connection:**
   - To test if the settings have been applied correctly, visit a restricted or censored website.
   - If you can access it without any issues, your settings are working correctly.

## 3. Using PAC Files on Windows

### Step 1: Set Proxy Settings on Windows
1. **Open Windows Proxy Settings:**
   - Go to "Settings".
   - Navigate to "Network & Internet".
   - Click on "Proxy".
   
2. **Enable Proxy Using PAC File:**
   - Under "Automatic proxy setup", enable the "Use setup script" option.
   - In the "Script Address" field, enter the URL of your PAC file. For example:
     ```
     https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac
     ```

3. **Save Settings:**
   - Save the changes and restart Windows to apply them.

### Step 2: Test and Verify
1. To test, visit a restricted or censored website and check if you can access it.

## 4. Using PAC Files on Android

### Step 1: Install ProxyDroid (or any similar app)
1. **Download and Install ProxyDroid:**
   - Go to the Google Play Store, search for and install "ProxyDroid".
   
2. **Configure Proxy in ProxyDroid:**
   - Open the ProxyDroid app.
   - Select the "PAC" option.
   - In the "PAC URL" field, enter the PAC file URL.
     ```
     https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/refs/heads/main/pac/Canada.pac
     ```

3. **Enable the Proxy:**
   - Enable the proxy and save the settings.
   
### Step 2: Test and Verify
1. To test, visit a restricted website and check if you can access it.

---

## Contributing
To suggest changes or submit requests, please open an issue or a pull request.
