# 🎨 Block Based JavaScript Blueprints

<div align="center">
  <img src="https://user-images.githubusercontent.com/73013838/180638472-1d207273-11c6-4d23-9504-aea0d7c93cf9.gif" alt="Block Based JavaScript Builder" />
</div>

Welcome to the **Block Based JavaScript Blueprints**! This project is a block-based JavaScript builder, crafted with **TypeScript** and **React**. It's managed using **Lerna** for efficient package management.

## 🛠️ Tech Stack

- **TypeScript**: For type safety and better code quality.
- **React.js**: For building user interfaces.
- **Node.js**: To run JavaScript server-side.
- **Lerna**: For managing JavaScript projects with multiple packages.
- **Firebase**: For backend services and real-time data management.

## 📂 Folder Structure

Here’s a brief overview of the project structure:


### 🖥️ Client

This folder hosts the React application, where users can interact with the block-based builder.

### 📚 Lib

The `lib` folder contains shared types and documentation, ensuring consistency across the application.

### 🖥️ Server

The `server` folder runs the Express application, handling backend logic and APIs.

---

## 🚀 Setting Up the Application

Follow these steps to get started with the Block Based JavaScript Blueprints:

### 1. Install Dependencies

Run the following command to set up the project:

```bash
npx lerna bootstrap --use-workspaces
