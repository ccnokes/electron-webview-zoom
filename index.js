const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

app.on('ready', function() {
  let win = new BrowserWindow();
  win.loadURL(path.join('file://', __dirname, 'index.html'));
  win.webContents.openDevTools({ mode: 'bottom' });
});
