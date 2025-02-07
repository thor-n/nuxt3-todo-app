
# Nuxt 3 Todo App

This is a simple Todo application built with Nuxt 3, Tailwind CSS, and TypeScript. The application allows users to add, remove, and toggle the completion status of todo items.

## Features

- Add new todos
- Remove todos
- Toggle completion status of todos
- Responsive design using Tailwind CSS

## Project Structure

```
nuxt3-todo-app
├── assets
│   └── styles
│       └── tailwind.css
├── components
│   └── TodoItem.vue
├── composables
│   └── useTodos.ts
├── layouts
│   └── default.vue
├── pages
│   └── index.vue
├── public
├── static
├── store
│   └── index.ts
├── nuxt.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nuxt3-todo-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- To add a new todo, enter the todo text in the input field and press Enter.
- Click on a todo item to toggle its completion status.
- Click the delete button to remove a todo item from the list.

## Technologies Used

- Nuxt 3
- Tailwind CSS
- TypeScript

## License

This project is licensed under the MIT License.

## .gitignore

```
node_modules
.nuxt
.output
dist
.env
```

