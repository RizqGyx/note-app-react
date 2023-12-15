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
            error: ""
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

        if (this.state.title.trim() === "" || this.state.body.trim() === "") {
            this.setState({ error: "Title and body cannot be empty" });
            return;
        }

        this.props.addNote({
            id: Math.floor(Math.random() * 1000),
            ...this.state
        });

        this.setState({
            title: "",
            body: "",
            createdAt: new Date().toISOString(),
            error: ""
        });
    }

    render(){
        return(
            <form className='w-11/12 mx-auto flex flex-col border-4 border-slate-800 dark:border-white mt-10 p-5 gap-5' onSubmit={this.onSubmitEventHandler}>
                <div className="w-5/6 mx-auto">
                    {this.state.error && <p className="text-red-500">{this.state.error}</p>}
                    <p className="ml-2 text-gray-500 right-0 top-0">{this.calculateRemainingCharacters()} characters left</p>
                    <input type="text" placeholder='Title' className='w-full px-4 border-slate-800 border-2 py-2' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                </div>
                <textarea placeholder='Body' value={this.state.body} className='w-5/6 px-4 border-slate-800 border-2 py-2 mx-auto' onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit" className='bg-slate-800 font-bold thext-white w-5/6 mx-auto rounded-full p-2 dark:bg-blue-400 text-white'>Add Note</button>
            </form>
        )
    }
}

export default AddNoteForm;
