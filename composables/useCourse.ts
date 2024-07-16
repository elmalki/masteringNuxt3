import courseData from './courseData'
type lesson = {
    number:Number;
    title:String;
    slug:String;
    downloadUrl:String;
    videoId:Number;
    text:String;
    sourceUrl?:String;
    path:String
}
export const useCourse = () => {
    return {
        ...courseData,
        chapters: courseData.chapters.map((chapter) => ({
            ...chapter,
            lessons: chapter.lessons.map((lesson) => ({
                ...lesson,
                path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
            })),
        })),
    }
};
