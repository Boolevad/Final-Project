# Timer Extension
#### Video Demo:  [video](https://www.youtube.com/watch?v=_gTEabIcZKY)
#### Description:
This project was developed as my final project for Harvard University's [CS50x](https://cs50.harvard.edu/x/2024/) Introduction to Computer Science Course.

It is a simple google chrome Timer extension that lets you keep track of your desired activity.

## Table Of Contents

- [How to use](#how-to-use)
- [How it works](#how-it-works)
- [A deeper dive into the functions](#a-deeper-dive-into-the-functions)

## How to use:

After installing the extension, the user can add their desired activity by clicking the plus button and typing the name of the activity.

![adding](https://github.com/Boolevad/Final-Project/assets/123184634/a84bbf94-1dd6-4c88-a269-9479f31e963c)

Then the user can start the timer by clicking the play/pause button and underneath the activity box will be displayed the time elapsed, while the hourglass will start spinning.

![playing](https://github.com/Boolevad/Final-Project/assets/123184634/7f53065a-9427-4722-b1ee-d08b8cfe1b53)

Pressing the stop button, both the timer and the hourglass reset to the starting position.

![stopping](https://github.com/Boolevad/Final-Project/assets/123184634/0e3e9eae-7abb-43d7-a7a2-9ada29384c1f)

Then the user can press the plus button again to clear the activity box and add a new activity.

## How it works:

This project implements a timer with start/pause/reset functionality and an image that spins when the timer is running. The state of the timer and the image rotation is preserved using localStorage, ensuring that the state persists across page reloads and navigation.

The project consists of 4 main files:
- `manifest.json`. This JSON file contains all the necessary information required to build the Chrome extension, while it contains an "action" key which declares the image Chrome should use as the extension's action icon and the HTML page to show in a popup when the extension's action icon is clicked.
- `popup.html`. The HTML file contains elements for the timer, buttons for controlling the timer, and an input field for the activity.
- `popup.css`. The CSS file provides basic styles for the timer, buttons, and rotating image.
- `popup.js`. This is the JavaScript file for the popup, used to add interactivity to the popup.html.

Also, 4 png files were used to demonstrate the buttons and icons.
- `plus.png`
- `play.png`
- `stop.png`
- `timer.png`

## A deeper dive into the functions

Some of the main functions used:
1. `toggleSpin()` - This function handles the spinning effect
3. `resetImage()` - This function resets bot the image and the timer 
5. `toggleTimer()` - This function calculates the elapsed time
6. `startTimer()` - This function starts the timer, ensuring that no existing interval is running
7. `resetTimer()` - This function resets the timer
8. `updateTimerDisplay()` - This function updates the timer diplay
9. `pad()` - This function is used to change the time in the appropriate format
10. `handlePlusButtonClick()` - This function enables the following operations:
    - If the activity container is empty the plus button is disabled
    - If the activity container is not empty, the plus button is enabled. By pressing it, it adds a new activity while enabling the start/pause and reset buttons
    - If being pressed again, it clears the activity input and resets the plus button state

Also, event listeners were added to handle button clicks for starting, pausing, and resetting the timer, as well as managing the activity input and state.
