new Vue({
    el: "#flashcards-app",
    data: {
        question:"",
        answer:"",
        category:"",
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ]
    },
    methods:{
        addCard: function(){
            this.cards.push({
                question: this.question,
                answer: this.answer,
                category: this.category,
                flipped: false,
            })
                this.question = "",
                this.answer = "",
                this.category = ""
        }

    }
});