const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 2000,
    height: 800,
    resizable: true,
    fullscreenable: true,
    autoHideMenuBar:true,
    webPreferences: {
      nodeIntegration: true 
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
