import { get } from 'axios'
export function getPosts(url){
    return get(url)
}