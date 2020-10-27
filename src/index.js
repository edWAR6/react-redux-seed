import App from './App'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store'
import { persistStore } from 'redux-persist'

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={
            <div>⏰ Loading ... ...</div>
        } persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
