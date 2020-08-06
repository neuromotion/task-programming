import sendCode from '../trials/sendCode'
import message from '../trials/message'
import userId from '../trials/userId'
import focus from '../trials/focus'
import experimentStart from '../trials/experimentStart'
import {AT_HOME, lang} from '../config/main'

const volumeMessage = lang.instructions.adjust_volume
const makeSure = lang.instructions.make_sure
const preamble = {
  type: 'html_keyboard_response',
  stimulus: '',
  timeline: (AT_HOME) ?
    [ experimentStart(), 
      userId(), 
      message(`${volumeMessage} \n ${makeSure}`),
      sendCode('open_task', 2000, true)
    ] :
    [ experimentStart(), 
      userId(), 
      focus(), 
      message(volumeMessage),
      sendCode('open_task', 2000, true)
    ]
}

export default preamble
