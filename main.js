// Defined variables and required node_modules
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Creating the window
let win;

// Create window function
function createWindow() {
  win = new BrowserWindow({width: 1000, heigth: 700, resizable: false})

  win.loadURL(url.format({
    pathname: path.join(__dirname,'/html/index.html'),
    protocol: 'file',
    slashes: true
  }));

  // Open devtools
  win.webContents.openDevTools();

  // Close window
  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow); // Checks if electron is ready to create window, then does so
