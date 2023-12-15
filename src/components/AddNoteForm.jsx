import React from 'react';

class AddNoteForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: "",
            body: "",
            archived: false,
            createdAt: new Date().toISOString(),
            maxTitleLength: 50,
        }

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event){
        const { value } = event.target;
        if (value.length <= 50) {
            this.setState({
                title: value
            });
        }
    }

    onBodyChangeEventHandler(event){
        this.setState({
            body: event.target.value
        })
    }

    calculateRemainingCharacters() {
        return this.state.maxTitleLength - this.state.title.length;
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote({
            id: Math.floor(Math.random() * 1000),
            ...this.state
        });
        this.setState({
            title: "",
            body: "",
            createdAt: new Date().toISOString(),
        });
    }

    render(){
        return(
            <form className='w-11/12 mx-auto flex flex-col border-4 border-slate-800' onSubmit={this.onSubmitEventHandler}>
                <div className="flex flex-col w-3/4 mx-auto">
                    <span className="ml-2 text-gray-500 ">{this.calculateRemainingCharacters()} characters left</span>
                    <input type="text" placeholder='Title' className='w-full' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                </div>
                <textarea placeholder='Body' value={this.state.body} className='w-3/4 mx-auto' onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit">Add Note</button>
            </form>
        )
    }
}

export default AddNoteForm;