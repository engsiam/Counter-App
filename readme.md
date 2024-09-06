# Counter App with Dark Mode

This is a simple counter app that allows users to increase, decrease, and reset the counter, with additional features like customizable step size, keyboard controls, sound effects, and a toggleable dark mode.

## Features

- **Increment/Decrement Counter**: Use the "+" and "-" buttons or the up/down arrow keys to increase or decrease the counter.
- **Custom Step Size**: Specify a custom step size for increments/decrements using the step input.
- **Double Increment/Decrement**: Hold the **Shift** key while pressing the up or down arrow to double the step size.
- **Keyboard Shortcuts**:
  - Press **ArrowUp** to increment.
  - Press **ArrowDown** to decrement.
  - Press **Shift + ArrowUp/Down** to double the step.
  - Press **r** to reset the counter.
- **Sound Effects**: Plays a click sound every time the counter is increased or decreased.
- **Disable Buttons at Limits**: The "+" and "-" buttons will be disabled when the counter reaches its maximum or minimum limits.
- **Warning Message**: Displays a message when the counter reaches the defined limits.
- **Dark Mode**: Toggle between light and dark themes using the **"Dark Mode"** button. The app remembers your choice using localStorage.

## Live Demo

[Live Counter App](https://66d9f64914f9445be72d9b85--aquamarine-llama-21e8bc.netlify.app/) <!-- Add your live demo link here if hosted online -->

## Screenshots

### Light Mode
![Light Mode](https://ibb.co/4MqJgXY) <!-- Add light mode screenshot link here -->

### Dark Mode
![Dark Mode](https://ibb.co/tKDW5GT) <!-- Add dark mode screenshot link here -->

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/engsiam/counter-app.git
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
