import { lang, AT_HOME } from '../config/main'
import { photodiodeGhostBox } from '../lib/markup/photodiode'
import { baseStimulus } from '../lib/markup/stimuli'

let TASK_NAME = (AT_HOME) ? "Cognitive Behavioral Therapy" : lang.task.name
const experimentStart = () => {
  let stimulus = baseStimulus(`<h1>${TASK_NAME}</h1>`, true) + photodiodeGhostBox()

   return {
    type: 'html_button_response',
    stimulus: stimulus,
    choices: [lang.prompt.continue]
  }
}

export default experimentStart
