export type Response = {
    posts :{
        data:Post[];
        meta:{
            totalCount:number;
        };
    };
};
export type Post = {
    id:number;
    title:string;
}