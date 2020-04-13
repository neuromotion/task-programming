import { jsPsych } from 'jspsych-react'


const getUserId = (data) => {
  const patientId = JSON.parse(data.responses)['Q0']
  jsPsych.data.addProperties({patient_id: patientId, timestamp: Date.now()})
  console.log("ID", patientId)
}

const beep = (audioCodes) => {
  console.log(audioCodes)
  const context = new AudioContext()
  const o = context.createOscillator()
  const g = context.createGain()
  o.type = audioCodes.type
  o.connect(g)
  o.frequency.setValueAtTime(audioCodes.frequency, 0)
  g.connect(context.destination)
  o.start()
  o.stop(context.currentTime + 0.4)
}


export {
  getUserId,
  beep
}
