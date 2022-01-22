let title = document.querySelector('.post-title');
let description = document.querySelector('.post-description');
let commentsList = document.querySelector('.comments-list');



class Post {
    constructor(title, description, comments) {
        this.title = title;
        this.description = description;
        this.comments = comments;
    }

    async getPost() {
        try {
            let post = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            return post.json();
        }
        catch {
            console.error('Error');
        }
    }

    async displayPost() {
        try {
            let postData = await this.getPost();
            this.renderPostData(postData);
        }
        catch {
            console.error('Error');
        }
    }

    renderPostData(postInfo) {
        this.title.innerHTML = postInfo.title;
        this.description.innerHTML = postInfo.body;
    }

    async getComments() {
        try {
            let comments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
            return comments.json();
        }
        catch {
            console.error('Error');
        }
    }

    async displayComments() {
        try {
            let commentsData = await this.getComments();
            this.renderCommentsData(commentsData);
        }
        catch {
            console.error('Error');
        }
    }

    renderCommentsData(commentsInfo) {
        let commentsList = '';
        for(let data of commentsInfo) {
            commentsList += `<li>${data.body}</li>`;
        }
        this.comments.innerHTML = commentsList;
    }
}
let post = new Post(title, description, commentsList);
post.displayPost();
post.displayComments();
