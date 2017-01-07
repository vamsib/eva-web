export function initialize( appInstance ) {
  appInstance.inject('component', 'speechRecognition', 'service:speech-recognition');
}

export default {
  name: 'speech-recognition',
  initialize
};
