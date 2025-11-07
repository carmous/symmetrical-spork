const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    width: 1000,
    height: 800,
    resizable: true,
    webPreferences: {
      nodeIntegration: true
    }
  }); 

  win.loadFile('index.html');
  win.autoHideMenuBar(true);
}

  app.whenReady().then(() =>{
  createWindow(); 

  

ipcMain.on('force-close-app', () => {
  console.log('Force closing the app...');
  app.exit(0); 


  });
});



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


