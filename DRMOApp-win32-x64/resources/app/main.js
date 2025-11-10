

const { app, BrowserWindow, ipcMain } = require('electron');



function createWindow() {
  const win = new BrowserWindow({
    width: 2000,
    height: 800,
    resizable: true,
    fullscreenable: true,
    autoHideMenuBar:true,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false   
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('quit-app', () => {
  app.quit();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
