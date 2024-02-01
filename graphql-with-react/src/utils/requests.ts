import request,{gql} from "graphql-request"
import { Response } from "../types";
const ENDPOINT = "https://graphqlzero.almansi.me/api"
async function getAllPosts(){
    const query = gql`
    query {
        posts{
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }
    `;
    const response = await request<Response>(ENDPOINT,query);
    return response.posts.data; 
}
export default getAllPosts;