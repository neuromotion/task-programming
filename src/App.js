import React from 'react'
import { Experiment, jsPsych } from 'jspsych-react'
import { tl } from './timelines/main'
import { IS_ELECTRON } from './config/main'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

let ipcRenderer = false;
if (IS_ELECTRON) {
  const electron = window.require('electron');
  ipcRenderer  = electron.ipcRenderer;
} 

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Experiment settings={{
          timeline: tl,
          on_data_update: (data) => {
            if ( ipcRenderer ) {
              ipcRenderer.send('data', data)
            }

          },
          on_finish: (data) => {
            if ( ipcRenderer ) {
              ipcRenderer.send('end', 'true')
            } else {
              jsPsych.data.get().localSave('csv','neuro-task.csv');
            }
          },
        }}
        />
      </div>
    );
  }
}

export default App
