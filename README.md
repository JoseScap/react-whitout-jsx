# React Simple Component Renderer

This repository contains a simple React project where components are rendered using the `React.createElement` function instead of JSX. The purpose of this project is to delve into how React renders components, as JSX is essentially a translation of our XML-like syntax to `createElement` calls.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/JoseScap/react-whitout-jsx.git
```

2. Navigate to the project directory:

```bash
cd react-without-jsx
```

3. Install the dependencies:

```bash
npm install
```
or
```bash
yarn install
```

## Usage

To start the development server and view the rendered components, run the following command:

```bash
npm run dev
```
or
```bash
yarn dev
```

This will start the development server and open your default browser to display the rendered components.

## Project Structure

The project structure is organized as follows:

```
├── src
│   ├── components
│   │   ├── Form.js
│   │   ├── Input.js
│   │   ├── List.js
│   │   ├── ListItem.js
│   ├── App.js
│   └── main.js
└── ...
```

- `src/components`: This directory contains the individual component files. You can create new components or modify the existing ones here.
- `src/App.js`: The entry point of the application, where the components are imported and rendered using `React.createElement`.

## Acknowledgments

Special thanks to the React team for their incredible work on the React library.

## Contact

For any inquiries or feedback, please contact [juanpuentescapolatempo@gmail.com](mailto:juanpuentescapolatempo@gmail.com).

---

Happy coding!