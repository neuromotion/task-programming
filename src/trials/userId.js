import { lang } from '../config/main'
import { getUserId } from '../lib/utils'
import { baseStimulus } from '../lib/markup/stimuli'

const userId = () => {
    return {
      type: 'survey_text',
      questions: [{ prompt: baseStimulus(`<h1>${lang.userid.set}</h1>`, true), value: process.env.REACT_APP_PATIENT_ID }],
      on_finish: (data) => {
        getUserId(data)
      }
    }
}

export default userId
