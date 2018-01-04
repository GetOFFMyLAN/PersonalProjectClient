// Defined variables and required node_modules
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Creating the window
let win;

// Create window function
function createWindow() {
  win = new BrowserWindow({width: 1000, heigth: 1100, resizable: false, icon: './html/img/logo2.png', maximizable: false}) //TODO: add framless window after finalizing the product

  // Remove menu
  //win.setMenu(null);

  // Load index.html
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
