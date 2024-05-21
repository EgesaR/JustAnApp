const path = require("path");
const os = require("os");
const fs = require("fs");
const resizeImg = require("resize-img");
const {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
  shell,
  session,
} = require("electron");

const isDev = process.env.NODE_ENV !== "development";
//const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === "darwin";

let splashWindow;
let mainWindow;
let aboutWindow;

//Splash Window
function createSplashWindow(){
  splashWindow = new BrowserWindow({
    width: 700,
    height: 500,
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: false,
      preload:path.join(__dirname,"preload.js")
    }
  });

  ipcMain.on('splashtimeout', () => {
    createMainWindow()
  })

  // splashWindow.loadURL(`file://${__dirname}/renderer/splashscreen.html`);
  splashWindow.loadFile(path.join(__dirname, "./renderer/splashscreen.html"));
}
// Main Window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: isDev ? 1200 : 900,
    height: 700,
    minHeight: 560,
    minWidth: 940,
    title: "Works",
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizable: isDev,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  //Minimize App
  ipcMain.on('minimizeApp', () => {
    mainWindow.minimize()
    console.log("Minimize")
  })

  //Maximize Restore App
  ipcMain.on('maximizeRestoreApp', () => {
    if(mainWindow.isMaximized()){
      mainWindow.restore()
      console.log("restore")
    } else {
      mainWindow.maximize()
      console.log("maximize")
    }
  })

  //Check if the window is maximized
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('isMaximized')
  })

  //Check if the window is Restored
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('isRestored')
  })

  //Close App
  ipcMain.on('closeApp', () => {
    mainWindow.close()
    console.log("close")
  })

  // Show devtools automatically if in development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.webContents.openDevTools();

  // mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
}


// About Window
function createAboutWindow() {
  aboutWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: "About Electron",
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
  });

  aboutWindow.loadFile(path.join(__dirname, "./renderer/about.html"));
}

// When the app is ready, create the window
app.on("ready", () => {
  //createSplashWindow();
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  // Remove variable from memory
  //splashWindow.on("closed", () => (splashWindow = null));
  mainWindow.on("closed", () => (mainWindow = null));
});

// Menu template
const menu = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  {
    role: "fileMenu",
  },
  ...(!isMac
    ? [
        {
          label: "Help",
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  // {
  //   label: 'File',
  //   submenu: [
  //     {
  //       label: 'Quit',
  //       click: () => app.quit(),
  //       accelerator: 'CmdOrCtrl+W',
  //     },
  //   ],
  // },
  ...(isDev
    ? [
        {
          label: "Developer",
          submenu: [
            { role: "reload" },
            { role: "forcereload" },
            { type: "separator" },
            {
              role: "toggledevtools",
              click: () => {
                mainWindow.webContents.openDevTools();
              },
            },
          ],
        },
      ]
    : []),
];


// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});

// Open a window if none are open (macOS)
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0)createMainWindow();
});
