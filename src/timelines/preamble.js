import sendCode from '../trials/sendCode'
import adjustVolume from '../trials/adjustVolume'
import userId from '../trials/userId'
import focus from '../trials/focus'
import experimentStart from '../trials/experimentStart'
import {AT_HOME} from '../config/main'

const preamble = {
  type: 'html_keyboard_response',
  stimulus: '',
  timeline: (AT_HOME) ?
    [ experimentStart(), 
      userId(), 
      adjustVolume(),
      sendCode('open_task', 2000, true)
    ] :
    [ experimentStart(), 
      userId(), 
      focus(), 
      adjustVolume(),
      sendCode('open_task', 2000, true)
    ]
}

export default preamble
