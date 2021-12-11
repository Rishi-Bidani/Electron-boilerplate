const electron = require("electron");
const url = require("url");
const path = require("path");
const { Menu } = require("electron/main");
const { app, BrowserWindow, ipcMain, webContents } = electron;

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 1100,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            nativeWindowOpen: true,
            preload: path.join(__dirname, "preload.js")
        }
    });
    mainWindow.maximize();
    mainWindow.loadFile("./templates/index.html");
    //Quit app when closed
    mainWindow.on("closed", function () {
        app.quit();
    });
});
