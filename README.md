# Timer Extension
#### Video Demo:  (https://www.youtube.com/watch?v=_gTEabIcZKY)
#### Description:
This project was developed as my final project for Harvard University's [CS50x](https://cs50.harvard.edu/x/2024/) Introduction to Computer Science Course.

It is a simple google chrome Timer extension that lets you keep track of your desired activity.

### How to use:

After installing the extension, the user can add their desired activity by clicking the plus button and typing the name of the activity.

![adding](https://github.com/Boolevad/Final-Project/assets/123184634/a84bbf94-1dd6-4c88-a269-9479f31e963c)

Then the user can start the timer by clicking the play/pause button and underneath the activity box will be displayed the time elapsed, while the hourglass will start spinning.

![playing](https://github.com/Boolevad/Final-Project/assets/123184634/7f53065a-9427-4722-b1ee-d08b8cfe1b53)

Pressing the stop button, both the timer and the hourglass reset to the starting position.

![stopping](https://github.com/Boolevad/Final-Project/assets/123184634/0e3e9eae-7abb-43d7-a7a2-9ada29384c1f)

Then the user can press the plus button again to clear the activity box and add a new activity.

### How it works:

The project consists of 4 main files:
- `manifest.json`. This JSON file contains all the necessary information required to build the Chrome extension, while it contains an "action" key which declares the image Chrome should use as the extension's action icon and the HTML page to show in a popup when the extension's action icon is clicked.
- `popup.html`. This html file contains the code required to define the structure of the popup interface.
- `popup.css`. This css file contains the necessary and custom styles used for the popup.html.
- `popup.js`. This is the JavaScript file for the popup, used to add interactivity to the popup.html.

Also, 4 png files were used to demonstrate the buttons and icons.
- `plus.png`
- `play.png`
- `stop.png`
- `timer.png`
