

```markdown
# Counter App with Dark Mode

This is a simple, interactive counter app that allows users to increase, decrease, and reset the counter, with features such as customizable step size, keyboard controls, sound effects, and a toggleable dark mode. The app offers a modern UI, responsive design, and smooth transitions between light and dark themes.

## Features

- **Increment/Decrement Counter**:
  - Use the **"+"** and **"-"** buttons to increment and decrement the counter.
  - You can also use the **ArrowUp** and **ArrowDown** keys on your keyboard for the same functionality.
  
- **Custom Step Size**:
  - Customize how much the counter increments or decrements by entering a value in the step input field.
  - Default step size is **1**.

- **Double Increment/Decrement**:
  - Hold the **Shift** key while pressing the **ArrowUp** or **ArrowDown** keys to double the step size for faster increments or decrements.

- **Reset Counter**:
  - Use the **Reset** button or press the **r** key to reset the counter back to zero.

- **Keyboard Shortcuts**:
  - **ArrowUp**: Increment the counter.
  - **ArrowDown**: Decrement the counter.
  - **Shift + ArrowUp/ArrowDown**: Double the step size for faster increments or decrements.
  - **r**: Reset the counter to zero.
  - **m**: Toggle sound on/off.
  - **d**: Toggle dark mode on/off.

- **Sound Effects**:
  - A click sound is played every time the counter is increased or decreased, adding to the interactive experience.
  - You can toggle sound effects on or off using the **Sound Toggle** button or the **m** key.
  
- **Button Disabling at Limits**:
  - The **"+"** and **"-"** buttons will automatically be disabled when the counter reaches its maximum or minimum limits to prevent overflows.
  
- **Warning Message**:
  - When the counter reaches the maximum or minimum defined limits, a warning message will be displayed to alert the user.

- **Dark Mode**:
  - Easily toggle between **Light Mode** and **Dark Mode** using the **Dark Mode** button or the **d** key.
  - The app will remember your dark mode preference using **localStorage**, so your choice is persistent even after you refresh the page.

- **Responsive Design**:
  - The app is fully responsive and works seamlessly on mobile, tablet, and desktop devices.

## Live Demo

[Live Counter App](https://66d9f64914f9445be72d9b85--aquamarine-llama-21e8bc.netlify.app/) <!-- Add your live demo link here if hosted online -->

## Screenshots

### Light Mode
![Light Mode](https://i.imgur.com/2Hdrzwt.png) 

### Dark Mode 
![Dark Mode](https://i.imgur.com/JBIeG8y.png)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/engsiam/Counter-App.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd counter-app
   ```

3. **Open the `index.html` file** in your browser to use the app.

## Usage

1. Open the app in your browser.
2. Use the "+" and "-" buttons to increment and decrement the counter.
3. Enter a custom step size to change how much the counter increments or decrements by.
4. Use the keyboard shortcuts:
   - **ArrowUp** to increment.
   - **ArrowDown** to decrement.
   - **Shift + ArrowUp/Down** to double the step.
   - Press **r** to reset.
   - Press **m** to toggle sound effects.
   - Press **d** to toggle dark mode.
5. Click the **"Dark Mode"** button to toggle between light and dark themes. Your preference will be saved even if you reload the page.

## Customization

You can modify the following limits in the `script.js` file:

```javascript
const minLimit = 0;
const maxLimit = 10;
```

Adjust these values to change the minimum and maximum limits of the counter.

## Versioning

### Version 2.0.0 (Latest)

- **Dark Mode**: Added support for dark mode, which can be toggled using the button or by pressing the `d` key.
- **Sound Effects**: Added click sound effects when incrementing or decrementing the counter, with the ability to toggle sound on/off using the button or the `m` key.
- **Keyboard Shortcuts**: Introduced new keyboard shortcuts for dark mode (`d`), sound toggle (`m`), and counter control (`ArrowUp`, `ArrowDown`, `Shift + ArrowUp/Down`).
- **Responsive Design**: Improved responsiveness to work seamlessly across mobile, tablet, and desktop screens.
- **localStorage Persistence**: The app now remembers the dark mode and sound preferences between sessions using localStorage.

### Version 1.0.0

- Basic functionality for incrementing, decrementing, and resetting the counter.
- Customizable step size input field.
- Basic button interactions without sound effects or dark mode.

## If You Like This Project

If you like this project, please consider giving it a ⭐ on [GitHub](https://github.com/engsiam/Counter-App).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```