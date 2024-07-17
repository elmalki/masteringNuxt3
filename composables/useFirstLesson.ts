export const useFirstLesson = () => {
  return useCourse().chapters[0].lessons[0];
};
