import React from 'react';

const Searchbox = (props) => {

    const submitter = (e) =>{
        e.preventDefault()
        props.submitHandler()
        
    }
    

    return (
        <div >
            <form className='input' onSubmit={submitter} >
                Susan's Kitchen
                <input  value={props.value} onChange={(e) => props.setSearchValue(e.target.value)} type='search' placeholder='search for recipes'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    );
};

export default Searchbox;