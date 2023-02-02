let event = new Vue();

Vue.component('container',{
    template: `
    
    <div class="container">
        <left-list></left-list>
        <center-list></center-list>
        <right-list></right-list>
    </div>
    `,
    methods: {

    },
    data(){
        return{
            
        };
    },
})

Vue.component('left-list',{
template: `
<div class:"left-list">
    <div class="column column1">
            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>

            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>

            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>
    </div> 
</div>

`
})

Vue.component('center-list',{
template: `
<div class:"center-list">
    <div class="column column2">
            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>

            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>

            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>

            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>

            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                    <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>
    </div>
</div>
` 
})

Vue.component('right-list',{
template: `
<div class:right-list>
    <div class="column column3">
            <div class="todo-card">
                <h3>Заголовок заметки</h3>
                <ul class="todo-list">
                        <li class="todo-item">
                        <p>Что то сделать</p>
                        <input class="todo-done" type="button" value="Готово">
                    </li>
                </ul>
            </div>
    </div>
</div>
`,
data(){
    return{
        
    };
},   
})

let app = new Vue({
    el: '#app',
    data: {
        id: 0,
        title: '',
        content: '',
        posts: [],
    },
    beforeMount() {
        if(localStorage.data) {
            this.posts = JSON.parse(localStorage.data)
        }
    }, 
    methods: {
        addPost: function () {
            if (this.title === '') {
                alert('Введите название')
            } else {
                this.id++;
                this.posts.push({ id: this.id, title: this.title, content: [], checkbox: [false] });
                this.title = '';
            }
        },
        deletePost: function (index) {
            this.posts.splice(index, 1);
            localStorage.data = JSON.stringify(this.posts)
        },
        addContent: function (index) {
            if (this.content === '') {
                alert('Заполните поле')
            } else {
                this.posts[index].content.push(this.content);
                this.content = '';
            }
        },
        deleteContent: function (index,indexContent) {
            this.posts[index].content.splice(indexContent, 1);
            this.posts[index].checkbox.splice(indexContent, 1);
        },
        addCheckbox: function() {
            this.posts[index].checkbox[indexContent] = !this.posts[index].checkbox[indexContent]
        },
    },
    updated() {
        localStorage.data = JSON.stringify(this.posts)
    }
})


