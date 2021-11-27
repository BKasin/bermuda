# Bermuda - iOS GPS Location Spoofing

#### General/FAQ

##### What is Bermuda?

Bermuda is a simple desktop application designed to modify the GPS coordinates of an iOS device (iPhone, iPad, iPod) without requiring any jailbreak/system modifications.

#### Why is it called Bermuda?

The Bermuda Triangle, also known as the Devil's Triangle, is a loosely defined region in the western part of the North Atlantic Ocean where a number of aircraft and ships are said to have disappeared under mysterious circumstances. (This application helps your GPS location disappear!)

##### Who is Bermuda For?

Bermuda is made for anyone, and everyone, including:

- Privacy conscious users who do not want their location data being shared. (Facebook?)
- Video game enthusiasts who enjoy playing geolocation based games (Pokemon Go)
- Online shoppers who would like to participate in location based sales (SNKRS / Adidas)

##### What do I need to use Bermuda?

- An iOS device (obviously)
- A personal computer running either Windows, or MacOS (Coming Soon)
- A USB to lightning cable to connect your iPhone/iPad/iPod to your computer
- **Windows Users**: iTunes must be installed [(Click here to download)](https://support.apple.com/downloads/itunes)

---

#### Getting Started

##### Bermuda Installation & Device Prep

- Download the latest release of Bermuda and install the desktop application.
- Connect your iOS device via USB to your computer, unlock it, and select "Trust this device" to allow USB communication.
- Open Bermuda and wait for your device to appear on the left hand panel.

##### Enabling Developer Mode

- Download an appropriate developer disk image to mount to your iOS device.
- Click the "..." menu next to your device name, and click "Mount Developer Image"
- A prompt will open to select your Developer Disk Image and confirm
- Another prompt will follow to select your Developer Disk Image Signature
- Once both are selected, your device will be put into developer mode

##### Setting GPS Location

- The location input will become enabled once your device is in developer mode
- Enter a GPS location, or move the map marker, and click the "Play" button to set a location for your iOS device.

---

#### Obtaining Developer Disk Images

Developer disk images are typically provided directly from Apple when using XCode with an iOS device connected. Bermuda requires a developer disk image be mounted on your device to utilize the location API provided by Apple.

Bermuda **DOES NOT** distribute, and/or provide, iOS developer disk images. However, included below is a list of Github repositories where some may be found:

- https://github.com/haikieu/xcode-developer-disk-image-all-platforms
- https://github.com/mspvirajpatel/Xcode_Developer_Disk_Images

---

#### Misc. Info

- If a device is disconnected, or the software is closed, Bermuda will assume the device is no longer in developer mode. You can remount the developer disk image to use Bermuda with that device again.
- If you are not sure if your device is in developer mode, you can check the settings app and look for a new "Developer" option in settings, this will confirm your device is in developer mode.
- Developer disk images are not necessarily iOS version specific, i.e. A disk image for iOS 15 may work with iOS 15.1, 15.1.1, etc. Proceed with caution when mixing/matching iOS disk image versions.

---

#### Precautions

- Bermuda is provided, as-is, without any express warranty on either the software or your personal devices. Please use appropriate caution with your device.
