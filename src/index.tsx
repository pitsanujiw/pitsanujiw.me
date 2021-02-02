import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './pages';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, Background } from './utils';
import "./tailwind.build.css";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Background>
                <main>
                    {/* <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                        <Toggle />
                    </div> */}
                    <App />
                </main>
            </Background>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();