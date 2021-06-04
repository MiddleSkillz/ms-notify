# Middle's Notifications
A fork of mythic_notify with added features and UI designs.

## Usage
To display a notification client side make a export call like below, all values have a default:

**All values other then text are not required and will be filled automatically with the defaults in the config. (ID IS REQUIRED FOR PERSISTENT NOTIFICATIONS!**
```
exports['ms-notify']:SendAlert({ type = 'normal', text = 'Normal Notification!', icon = 'fab fa-amazon', time = 6000 })
```

Displaying a persistent notification is just as easy!
```
exports['ms-notify']:SendAlert({ id = 'clothing_store_menu', type = 'normal', text = '[E] Open Clothing Store', icon = 'fab fa-amazon', time = -1 })
```
and to remove the notification when you want to
```
exports['ms-notify']:RemoveAlert('clothing_store_menu')
```

**There is a config in html/script.js for the JavaScript stuff like fade time and default time.**

**This Script uses font awesome for the icons, font awesome can be found [here](https://fontawesome.com/v5.15/icons?d=gallery&p=2).**

### Notification Styles (Default)
- Normal - `normal`
- Warning - `warning`
- Error - `error`
- System - `system`
- success - `success`

### Alignment Options (Default)
- Top Left - `top-left`
- Top Right - `top-right` or none
- Top Center - `top-center`
- Bottom Left - `bottom-left`
- Bottom Right - `bottom-right`
- Bottom Center - `bottom-center` 

https://prnt.sc/13z53jr
