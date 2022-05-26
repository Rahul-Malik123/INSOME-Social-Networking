// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const background = document.querySelectorAll('.choose-bg div');

// ===================== SEDEBAR ==============================

// remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// ===================== MESSAGES ========================
//search chats
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);


// hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// THEME CUSTOMIZATION

//opens model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

//closes model

const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}

//close model
themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);

// ============= FONTS ===========

// remove active class from spans or font size selectors
const removeClassActive = (el) => {
    el.forEach(e => {
        e.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeClassActive(fontSizes);
        size.classList.toggle('active');

        let fontSize;
        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeClassActive(colorPalette);
        color.classList.add('active');

        let primaryHue;
        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        }else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        }else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--color-primary-hue', primaryHue);
    })
})

// change background color

const changeBG = (light, white, dark) => {
    root.style.setProperty('--light-color-lightness', light);
    root.style.setProperty('--white-color-lightness', white);
    root.style.setProperty('--dark-color-lightness', dark);
}

background.forEach(bg => {
    bg.addEventListener('click', () => {
        removeClassActive(background);
        bg.classList.add('active');

        let lightColorLightness;
        let whiteColorLightness;
        let darkColorLightness;
        if(bg.classList.contains('bg-1')) {
            lightColorLightness = '95%';
            whiteColorLightness = '100%';
            darkColorLightness = '17%';
        }
        else if(bg.classList.contains('bg-2')) {
            lightColorLightness = '15%';
            whiteColorLightness = '20%';
            darkColorLightness = '95%';
        }
        else if(bg.classList.contains('bg-3')) {
            lightColorLightness = '0%';
            whiteColorLightness = '10%';
            darkColorLightness = '95%';
        }
        changeBG(lightColorLightness, whiteColorLightness, darkColorLightness);
    })
})