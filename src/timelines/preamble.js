import sendCode from '../trials/sendCode'
import holdUpMarker from '../trials/holdUpMarker'
import adjustVolume from '../trials/adjustVolume'
import userId from '../trials/userId'
import focus from '../trials/focus'
import experimentStart from '../trials/experimentStart'

const preamble = {
  type: 'html_keyboard_response',
  stimulus: '',
  timeline:
    [ experimentStart(), 
      userId(), 
      focus(), 
      adjustVolume(),
      holdUpMarker(),
      sendCode('open_task', 2000, true)

    ]
}

export default preamble
