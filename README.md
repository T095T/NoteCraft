# NoteCraft

A fast and minimal desktop Markdown note-taking app built with **Electron**, **React**, and **TypeScript**.  
Your notes are stored as plain `.md` files on your machine — simple, portable, and fully offline.

---

## Features

- Create, edit, and delete Markdown notes  
- Auto-save while typing (throttled to reduce disk writes)  
- Notes stored locally at: `~/Desktop/NoteCraft`  
- Clean UI using TailwindCSS  
- Global state management with Jotai  
- IPC-powered file read/write operations  
- Last-edit timestamps for every note   
- Markdown file discovery and loading  

---

## Tech Stack

- Electron  
- React + Vite  
- TypeScript  
- Electron-Vite  
- Jotai  
- TailwindCSS  
- fs-extra  

---


## What is Electron?

Electron is a framework that allows you to build **cross-platform desktop applications** using web technologies such as **HTML, CSS, and JavaScript**.  
It combines:

- **Chromium** – for rendering the UI  
- **Node.js** – for filesystem and OS-level access  

This makes it possible to build desktop apps using the same tools you use for web development.

### Why NoteCraft uses Electron

- Allows building a native desktop app while writing React + TypeScript  
- Gives access to the filesystem for reading/writing Markdown notes  
- Works on Windows, macOS, and Linux with a single codebase  
- Enables powerful desktop features like dialogs, file access, window controls, etc.

---

## What is Jotai?

Jotai is a **minimal and flexible state management library** for React.  
It uses small units of state called **atoms**, which makes your app’s logic simple and predictable.

### Why NoteCraft uses Jotai

- Very small and fast, perfect for a lightweight note app  
- State is stored in tiny units (atoms), which keeps code clean  
- No boilerplate compared to Redux or Zustand  
- Atoms work well with async actions (like reading/writing notes)  
- Easy to share global state between components (selected note, notes list, etc.)

---



## Development

### Install dependencies
```sh
npm install
```

## Contributing

Contributions, issues, and pull requests are welcome.  
Feel free to improve functionality, UI, or fix bugs.

## License

MIT License © 2025 NoteCraft


