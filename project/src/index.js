document.addEventListener('click', () => {
    // import('./click').then(({ default: func }) => {
    //     func()
    // })
    import(/* webpackPrefetch: true */ './click').then(({ default: func }) => {
        func()
    })
})
