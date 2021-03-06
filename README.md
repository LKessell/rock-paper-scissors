# Rock, Paper, Scissors!

![RPSoverview](https://user-images.githubusercontent.com/77205456/116300559-06a9d780-a76d-11eb-92b9-f8e7444acde6.gif)

## Project Overview

  The goal of Rock, Paper, Scissors was to demonstrate knowledge and skills built during Mod 1 at Turing. Using HTML, CSS, and JavaScript, I built a browser-based Rock, Paper, Scissors style game with Classic and Challenge gameplay modes. Some of the technical focuses for this project included:
  - Writing clean, DRY JavaScript that demonstrates developer empathy
  - Utilizing localStorage for persistent data across refreshes
  - Utilizing event delegation for similar event listeners
  - Maintaining a clear separation between the DOM and Data Model

The project spec can be viewed [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)!

## Table of Contents
  - <a href="#how-to-play">How to Play</a>
  - <a href="#technologies-used">Technologies Used</a>
  - <a href="#contributors">Contributors</a>
  - <a href="#challenges-and-wins">Challenges and Wins</a>
  - <a href="#future-additions">Future Additions</a>
  - <a href="#special-thanks">Special Thanks</a>

## <a id="#how-to-play">How to Play</a>

<img src="https://user-images.githubusercontent.com/77205456/116300608-14f7f380-a76d-11eb-9d3a-1f3ed22343fb.gif" alt="Classic Mode" width="300">  <img src="https://user-images.githubusercontent.com/77205456/116300662-250fd300-a76d-11eb-825f-e96aeaa0641f.gif" alt="Challenge Mode" width="300">

On the main screen, choose which game mode you would like to play by selecting the appropriate button. Each button outlines the rules and weapon options for each game mode.  
After choosing a game mode, you will be taken to the game board. Choose a weapon, and the computer will make a random choice. The results of the round will be shown, and the game will track the number of wins for both the player and the computer.  
If you would like to switch to a different game mode, click the "Change Game" button.

## <a id="#technologies-used">Technologies Used</a>
  - HTML
  - CSS
  - Vanilla JavaScript

## <a id="#contributors">Contributors</a>
Lauren Kessell - 2103 FE Student - [GitHub Profile](https://github.com/LKessell)

## <a id="#challenges-and-wins">Challenges and Wins</a>
### Challenges
  - Maintaining a clear separation between the Data Model and DOM manipulation was tricky for this project! There have been several instances where I needed to refactor to improve this separation, and I'm sure that I can still continue to improve in this area.
  - I ran into an event delegation issue where clicking on the text inside of a button would not fire the correct event listener. This took some careful investigation into how my event listeners were working. 
### Wins
  - I felt much more comfortable using localStorage in this project.
  - While keeping the Data Model and DOM manipulation separate was challenging, I feel like my understanding has improved a lot over the course of the project.
  - Utilizing event delegation in this project greatly helped to improve my skills using event targets.

## <a id="#future-additions">Future Additions</a>
 - Add an option to reset win counts
 - Add unique icons and styling for challenge mode
 - Make layout/styling improvements

## <a id="#special-thanks">Special Thanks</a>
  - [Foster Taylor](https://github.com/foster55f) - Mentor
  - [Will Mitchell](https://github.com/wvmitchell) - Project Manager/Instructor
  - [Kayla Wood](https://github.com/kaylaewood) - Instructor
  - [Heather Faerber](https://github.com/hfaerber) - Instructor
