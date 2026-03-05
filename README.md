Groovify is a browser-based music player designed to provide a simple and visually organized way to listen to a personal music collection directly from a website. The project focuses on building an interactive media interface using core web technologies while managing audio playback, track selection, and album art display.

The player allows users to browse a list of songs and play them instantly within the browser without needing any external applications. Each track is connected to its corresponding album artwork, creating a more immersive and visually engaging listening experience. When a user selects a song, the player dynamically updates the displayed cover image and loads the correct audio file.

The interface is designed to feel clean and intuitive. Music tracks are organized with their associated album covers, allowing users to easily recognize songs visually. The website handles audio playback controls and updates the player state using JavaScript, creating a responsive and interactive experience.

⚙️ Tech Stack

Frontend Technologies

HTML5

Used to create the structural layout of the music player, including the song list, player controls, and album artwork display.

CSS3

Handles the visual styling of the interface, including layout design, spacing, image presentation, and the overall aesthetic of the music player.

Vanilla JavaScript

Powers the interactive functionality of the player. JavaScript manages:

loading and switching songs

controlling audio playback

updating album cover images dynamically

handling user interactions such as selecting tracks

Media & Assets

MP3 Audio Files

The songs themselves are stored locally and loaded directly into the browser’s audio player.

JPG / PNG Image Assets

Used for album covers and visual elements of the interface.

Project Structure

The project is organized into separate folders to manage different types of assets efficiently:

music/ → contains all MP3 audio tracks

cover/ → album artwork associated with songs

sqcover/ → square cover images used for UI display

index.html → main webpage structure

style.css → player styling and layout

script.js → player logic and interactivity
