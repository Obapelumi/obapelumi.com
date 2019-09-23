export default {
    state: () => ({
        firstLoad: true
    }),
    mutations: {
        toggleFirstLoad (state, firstLoad = false) {
            state.firstLoad = firstLoad
        }
    }
}