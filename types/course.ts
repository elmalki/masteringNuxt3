export type Lesson = {
    videoId:Number;
    number:Number;
    title:String;
    slug:String;
    downloadUrl:String;
    text:String;
    sourceUrl?:String
};
export type LessonWithPath = Lesson & {
    path:String;
};
export type Chapter = {
    title:String;
    slug:String;
    number:Number;
    lessons:Lesson[]|LessonWithPath[]
};
export type Course = {
    title:String;
    chapters:Chapter[]
};

