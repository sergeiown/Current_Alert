/* Copyright (c) 2024 Serhii I. Myshko
https://github.com/sergeiown/Alert_Server/blob/main/LICENSE */

'use strict';

const Tray = require('trayicon');
const fs = require('fs');
const path = require('path');
const {
    createTitleMenu,
    createAlertsMenu,
    createFrontMenu,
    createInfoMenu,
    createSettingsMenu,
    createExitMenu,
} = require('./trayIconMenu');
const messages = require('./messageLoader');
const { getSettings } = require('./settings');

function createTrayIcon() {
    const checkInterval = 2000;
    let isAlertActive = false;
    let trayInstance = null;

    function updateAlertStatus() {
        const settings = getSettings();

        const alertActive = settings.alertActive;

        if (alertActive === 0) {
            if (isAlertActive) {
                isAlertActive = false;
                updateTrayIcon('normal');
            }
        } else {
            isAlertActive = true;
            updateTrayIcon('alert', alertActive);
        }
    }

    function updateIconImagePath() {
        const tempDir = process.env.temp || process.env.TEMP;
        const monoIconMarkerPath = path.join(tempDir, 'alertserver_icon.tmp');
        const isMonoIconMarkerExists = fs.existsSync(monoIconMarkerPath);

        const imagePath = !isMonoIconMarkerExists
            ? path.join(__dirname, '..', 'resources', 'images', 'tray.ico')
            : path.join(__dirname, '..', 'resources', 'images', 'tray_mono.ico');

        const alertImagePath = !isMonoIconMarkerExists
            ? path.join(__dirname, '..', 'resources', 'images', 'tray_alert.ico')
            : path.join(__dirname, '..', 'resources', 'images', 'tray_alert_mono.ico');

        return { imagePath, alertImagePath };
    }

    function updateTrayIcon(state, data) {
        const { imagePath, alertImagePath } = updateIconImagePath();
        const menuTitle = createTitleMenu(trayInstance);
        const alertsItem = createAlertsMenu(trayInstance);
        const frontItem = createFrontMenu(trayInstance);
        const settings = createSettingsMenu(trayInstance);
        const logView = createInfoMenu(trayInstance);
        const quit = createExitMenu(trayInstance);

        if (state === 'start') {
            trayInstance.setMenu(
                menuTitle,
                trayInstance.separator(),
                alertsItem,
                frontItem,
                settings,
                logView,
                trayInstance.separator(),
                quit
            );
            trayInstance.setTitle(messages.msg_23);
            trayInstance.setIcon(fs.readFileSync(imagePath));
            trayInstance.notify(messages.msg_22, messages.msg_25);
        } else if (state === 'normal') {
            trayInstance.setTitle(messages.msg_23);
            trayInstance.setIcon(fs.readFileSync(imagePath));
        } else if (state === 'alert') {
            trayInstance.setTitle(`${messages.msg_24} ${parseInt(data)}`);
            trayInstance.setIcon(fs.readFileSync(alertImagePath));
        }
    }

    function startTrayIcon(option) {
        Tray.create(function (tray) {
            trayInstance = tray;
            updateTrayIcon(option);
            setInterval(updateAlertStatus, checkInterval);
        });
    }

    startTrayIcon('start');
}

module.exports = { createTrayIcon };
