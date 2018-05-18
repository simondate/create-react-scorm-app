import {SCORM} from 'pipwerks-scorm-api-wrapper';

let Scorm = {
  init() {
    SCORM.init();
  },

  getLearnerName() {
    return SCORM.get('cmi.core.student_name');
  },

  finish() {
    console.log('you have finished!');
    SCORM.set('cmi.core.lesson_status', 'completed');
    SCORM.save();
  }
}

export default Scorm;
