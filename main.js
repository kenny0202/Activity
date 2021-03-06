const {app, BrowserWindow, Menu, Tray} = require('electron')
const Positioner = require('electron-positioner')
//const menubar = require('menubar')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win


function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 350, height: 550, resizable: true, movable: false, backgroundColor: '#B9F6CA'})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  })
)

  //position the electron window
  var positioner = new Positioner(win)
  positioner.move('bottomRight')



  // Open the DevTools.
  //win.webContents.openDevTools()

  //get rid of the windows menu bar
  //win.setMenu(null);

  

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

function toggleWindow() {
  if (win.isVisible()) {
    win.webContents.send('setVisible', false);
        setTimeout(function () {
            win.hide();
        }, 300);
    }
  else {
        win.show();
    win.webContents.send('setVisible', true);
    }
}

let tray = null
app.on('ready', () => {
  tray = new Tray(path.join(__dirname, 'act.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show/Hide', type: 'normal', click: function () { toggleWindow(); } },
    { label: 'Exit', type: 'normal', click: function() { app.quit(); } }
  ])
  tray.setToolTip('Activity')
  tray.setContextMenu(contextMenu)
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.