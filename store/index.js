export const state = () => ({
  isDarkTheme: false,
  popupMsg: {
    show: false
  },
  dialog: {
    show: false,
    title: "Are you sure",
    question: "HELLLLLO",
    action: null
  }
})

export const getters = {
  getPopupMsg(state) {
    return state.popupMsg
  }
}

export const mutations = {
  showMessage(state, inp) {
    let msg,
      color = "info"
    if (inp.msg) {
      ;[msg, color = color] = [inp.msg, inp.color]
    } else {
      msg = inp
    }
    state.popupMsg = {
      show: true,
      msg,
      color
    }
  },
  showError(state, msg) {
    if (msg instanceof Error) {
      msg = msg.name + ": " + msg.message
    }
    state.popupMsg = {
      show: true,
      msg,
      color: "error"
    }
  },
  hideMessage(state) {
    state.popupMsg.show = false
  },
  showDialog(state, params) {
    state.dialog.show = true
    state.dialog.title = params.title // "Are you sure",
    state.dialog.question = params.question //:"HELLLLLO",
    state.dialog.action = params.action
  },
  hideDialog(state) {
    state.dialog.show = false
  },
  hideDialogWithAction(state) {
    state.dialog.show = false
    if (state.dialog.action) {
      state.dialog.action()
      state.dialog.action = null
    }
  },
  toggleDarkTheme(state) {
    state.isDarkTheme = !state.isDarkTheme
  },
  toggle(state, key) {
    state[key] = !state[key]
  }
}

export const actions = {}
