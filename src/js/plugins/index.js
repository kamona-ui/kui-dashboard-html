import sidebar from './sidebar'
import dropdown from './dropdown'
import perfectScroll from './perfectScroll'

export default function (Alpine) {
    sidebar(Alpine)
    dropdown(Alpine)
    perfectScroll(Alpine)
}
