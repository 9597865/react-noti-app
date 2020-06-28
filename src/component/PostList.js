//rcc 快捷键
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { countAddAction, countReduceAction } from '../actions/counter_action'
import { loadPostsAction } from "../actions/post_action";
import { loadPhotosAction } from "../actions/photo_action"

class PostList extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        console.log('-------componentDidMount-------')
        console.log(this.props)
        this.props.dispatch(loadPostsAction)
        this.props.dispatch(loadPhotosAction)
    }

    render() {
        const { add, reduce, post, photo } = this.props
        const { list } = post
        const posts = list.map(post=>{
            return (<li key={post.id}>{post.title}</li>)
        })
        const { list:photoList} = photo
        const photos = photoList.map( item => {
            return <li key={item.id}>{item.thumbnailUrl}</li>
        }) 
        return (
            <div>
                {this.props.counter.count}
                <button onClick={()=>{add()}}> +1</button>
                <button onClick={()=>{reduce()}}> -1</button>
               <div>
                 <ul>
                     {photos}
                 </ul>
               </div>
               <div>
                 <ul>
                     {posts}
                 </ul>
               </div>
            </div>
        )
    }
}

const mapStateProps = (state, ownProps) =>{
    //console.log('=========mapStateProps=======')
    //console.log(state)
    return {
        ...state,
        post: state.post,
        photo: state.photo
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
   return {
    dispatch,
    add:() => dispatch(countAddAction),
    reduce:() => dispatch(countReduceAction)
   }
};
export default connect(mapStateProps, mapDispatchToProps)(PostList)
