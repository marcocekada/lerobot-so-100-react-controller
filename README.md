# LeRobot SO-100 React Controller

A web-based controller for the [LeRobot SO-100](https://github.com/TheRobotStudio/SO-ARM100) robotic arm. Built with React, it communicates with an Arduino Mega via the **Web Serial API** to control 6 servo motors in real time directly from your browser.

The goal of this project is to control a single SO-100 arm through a web interface, without the leader/follower setup described in the [Hugging Face LeRobot repo](https://github.com/huggingface/lerobot).

## Features

- **Real-time motor control** — move each of the 6 joints using sliders or direct input
- **Web Serial API** — connect to Arduino directly from the browser (Chrome/Edge)
- **Motor configuration panel** — view name, min/max range and current position for each motor
- **Pad control** — select a motor and adjust its position with a range slider
- **Activity log** — live log of all serial commands sent to Arduino
- **Arduino code examples** — built-in code viewer with the Arduino sketch and usage snippets
- **Responsive design** — works on desktop and tablet screens

## Hardware

| Component | Qty | Link |
|---|---|---|
| Waveshare 30KG Serial Bus Servo | 6 | [Amazon](https://www.amazon.it/dp/B0B6HSBRGF) |
| Motor control board | 1 | [Amazon](https://www.amazon.it/dp/B0DK79JNNK) |
| Waveshare board ESP32 | 1 | [Amazon](https://www.amazon.it/dp/B09SZ41RJW) |
| Arduino Mega | 1 | [Amazon](https://www.amazon.it/Arduino-Mega-2560-Rev3-microcontrollore/dp/B0046AMGW0) |
| Power supply | 1 | [Amazon](https://www.amazon.it/dp/B01HRR9GY4) |
| 3D-printed parts | 1 set | [SO-ARM100 STL files](https://github.com/TheRobotStudio/SO-ARM100?tab=readme-ov-file#printing-the-parts) |
| USB-C cable | 1 | — |
| Table clamp | 2 | [Amazon](https://www.amazon.it/dp/B001DZQ3HA) |
| UVC camera (optional) | 1 | [Amazon](https://www.amazon.it/dp/B0CNCSFQC1) |

## Motor Configuration

| Motor | Name | ID | Min | Max | Default |
|---|---|---|---|---|---|
| Motor 1 | shoulder_pan | 1 | 1400 | 2900 | 2000 |
| Motor 2 | shoulder_lift | 8 | 1100 | 2700 | 2000 |
| Motor 3 | elbow_flex | 12 | 1100 | 2900 | 2000 |
| Motor 4 | wrist_flex | 16 | 1000 | 2900 | 2000 |
| Motor 5 | wrist_roll | 20 | 900 | 3700 | 2000 |
| Motor 6 | gripper | 24 | 1940 | 2600 | 2000 |

## Communication Protocol

- **Baudrate:** 115200 (Serial USB between PC and Arduino)
- **Servo bus:** 1000000 baud (Serial1, Arduino to servos via SCServo library)
- **Command format:** `M<id>:<position>` (e.g. `M1:2000`)
- **Response:** ASCII feedback from Arduino (`→ move #1 to 2000` / `✔ done`)

## Prerequisites

- **Node.js** >= 18
- **npm** >= 9
- **Google Chrome** or **Microsoft Edge** (Web Serial API is not supported in Firefox/Safari)
- **Arduino Mega** with the sketch from `src/assets/code/arduino_code.txt` uploaded
- [SCServo library](https://github.com/ftservo/SCServo) installed in Arduino IDE

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/marcocekada/lerobot-so-100-react-controller.git
   cd lerobot-so-100-react-controller
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Upload the Arduino sketch**

   - Open Arduino IDE
   - Install the **SCServo** library
   - Copy the code from `src/assets/code/arduino_code.txt` into a new sketch
   - Select board **Arduino Mega 2560** and the correct serial port
   - Upload

4. **Start the development server**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

5. **Connect to the robot**

   - Click **"Connect to Arduino"** in the web interface
   - Select the Arduino serial port from the browser popup
   - Use the sliders or the pad control to move the motors

## Production Build

```bash
npm run build
```

The optimized bundle will be generated in the `build/` folder, ready to be deployed to any static hosting service.

## Project Structure

```
src/
├── components/
│   ├── HeaderBlock/           # Navigation bar
│   ├── FooterBlock/           # Footer
│   └── LeRobotController/    # Main controller component (serial + UI)
├── pages/                     # Route pages (Home, About, Code, Repo, Waveshare)
├── core/                      # Utilities (API manager, i18n, helpers)
├── config/                    # App settings and Bootstrap SCSS overrides
├── css/                       # Global stylesheets
└── assets/
    └── code/                  # Arduino sketch and code snippets
```

## Tech Stack

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/) + [Bootstrap 5](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/) icons
- [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)
- [SCServo](https://github.com/ftservo/SCServo) Arduino library

## Browser Compatibility

The Web Serial API is required to communicate with the Arduino. Supported browsers:

| Browser | Supported |
|---|---|
| Google Chrome (desktop) | Yes |
| Microsoft Edge (desktop) | Yes |
| Opera | Yes |
| Firefox | No |
| Safari | No |
| Mobile browsers | No |

## License

This project is open source. Feel free to use, modify and distribute it.

## Links

- [SO-ARM100 hardware design](https://github.com/TheRobotStudio/SO-ARM100)
- [Hugging Face LeRobot](https://github.com/huggingface/lerobot)
- [SCServo Arduino library](https://github.com/ftservo/SCServo)
- [Web Serial API docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)
