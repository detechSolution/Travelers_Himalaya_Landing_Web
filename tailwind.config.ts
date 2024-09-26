import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
const srcDir = './'
export default <Partial<Config>>{
    content: [
        `${srcDir}/components/**/*.{vue,js,ts}`,
        `${srcDir}/layouts/**/*.vue`,
        `${srcDir}/pages/**/*.vue`,
        `${srcDir}/composables/**/*.{js,ts}`,
        `${srcDir}/plugins/**/*.{js,ts}`,
        `${srcDir}/utils/**/*.{js,ts}`,
        `${srcDir}/App.{js,ts,vue}`,
        `${srcDir}/app.{js,ts,vue}`,
        `${srcDir}/Error.{js,ts,vue}`,
        `${srcDir}/error.{js,ts,vue}`,
        `${srcDir}/app.config.{js,ts}`
    ],
    theme: {
        extend: {
            colors: {
                primary: '#15803d',
                secondary: '#4da528',
                accent: '#fbad17',
                muted: '#6c757d',
            },
        },
    },
}
