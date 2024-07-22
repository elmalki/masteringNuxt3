import {
    Course,
    Chapter,
    Lesson,
    LessonWithPath
} from "~/types/course";

import course from '~/server/courseData'
import {Property} from "csstype";
import Outline = Property.Outline;
type OutlineBase = {
    title: String;
    slug: String;
    number: Number;
}
type OutlineChapter = OutlineBase & {
    lessons: OutlineLesson[];
};
type OutlineLesson = OutlineBase & {
    path: String;
}
course as Course;
type CourseMeta = {
    title: String;
    chapters: OutlineChapter[]
};

export default defineEventHandler((event): CourseMeta => {
   const outline:OutlineChapter[] = course.chapters.reduce((prev:OutlineChapter[],next:Chapter)=>{
       const lessons:OutlineLesson[] = next.lessons.map(
           (lesson:Lesson)=>({
           title:lesson.title,
           slug:lesson.slug,
           number:lesson.number,
           path:`/course/chapter/${next.slug}/lesson/${lesson.slug}`
       })
       );
       const outlineChapter:OutlineChapter = {
           title:next.title,
           slug:next.slug,
           number:next.number,
           lessons
       };
       return [...prev,outlineChapter];
   },[])
    return{
        title:course.title,
        chapters:outline,
    };
});
