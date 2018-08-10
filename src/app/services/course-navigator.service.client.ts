export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://cryptic-ridge-94740.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('https://cryptic-ridge-94740.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
  findAllLessonsForModule(courseId, moduleId) {
    return fetch('https://cryptic-ridge-94740.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
  findAllWidgetsForLesson(lessonId) {
    return fetch('https://cryptic-ridge-94740.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
  findAllSectionsForCourse(courseId) {
    console.log(courseId);
    return fetch('https://course-manager-node-server.herokuapp.com/api/course/' + courseId + '/section')
      .then(response => response.json());
  }
}
