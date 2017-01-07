export function initialize( appInstance ) {
  appInstance.inject('component', 'commandRunner', 'service:command-runner');
}

export default {
  name: 'command-runner',
  initialize
};
