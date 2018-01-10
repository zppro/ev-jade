const pkg = state => state.pkg
const app = state => state.app
const isAuthed = state => !!(state.app.user && state.app.user._id)
const device = state => state.app.device
const sidebar = state => state.app.sidebar
const effect = state => state.app.effect
const menuitems = state => state.menu.items
const componententry = state => {
  return state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}

export {
  pkg,
  app,
  isAuthed,
  device,
  sidebar,
  effect,
  menuitems,
  componententry
}
