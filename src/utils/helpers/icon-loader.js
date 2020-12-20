// Обьявляем все иконки за один раз, загружаем и используем где хотим

import Octicons from "react-native-vector-icons/Octicons";

const defaultIconProvider = Octicons
const iconsMap = {}

const sizes = {
    normal: 24
}

const replaceSuffixPattern = /__(inverted)/g;
const icons = {
    'mark-github': [sizes.normal, '#000000'],
    'mark-github__inverted': [sizes.normal, '#ffffff'],
    flame: [sizes.normal, '#000000'],
    flame__inverted: [sizes.normal, '#ffffff'],
    globe: [sizes.normal, '#000000'],
    globe__inverted: [sizes.normal, '#ffffff'],
    gear: [sizes.normal, '#000000'],
    gear__inverted: [sizes.normal, '#ffffff'],
};

const iconsLoaded = new Promise((resolve) => {
    Promise.all(
        Object.keys(icons).map((iconName) => {
            const Provider = icons[iconName][2] || defaultIconProvider
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1],
            )
        })
    ).then((sources) => {
        Object.keys(icons).forEach((iconName, idx) => {iconsMap[iconName] = sources[idx]})

        resolve(true)
    })
})

export {
    iconsMap,
    iconsLoaded
}