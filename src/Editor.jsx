import React, { useRef, useState } from 'react';
const DEFAULT_IMG_URL = 'https://source.unsplash.com/EwKXn5CapA4';
const Editor = ({ getImageStyle }) => {
    const [isSelected , setSelected] = useState(false)
    const ref = useRef(null)
    const handleSelect =(event)=>{
        const file = event.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.addEventListener("load", function () {
          setImage(reader.result)
          }, false);
    }
    const setImage=(url)=>{
        ref.current.style.backgroundImage = `url(${url})`
        setSelected(true)
    }
        return(
            <div className="editor" ref={ref} style={getImageStyle()}>
             { !isSelected &&
             <div className='input-file'>
                <h3> Import file from computer or choose random </h3>
                <label htmlFor="myfile">Select a file:</label>
                <input type="file" id="myfile" onChange={handleSelect} name="myfile" accept="image/*"/>
                <br/>
                <button onClick={()=>setImage(DEFAULT_IMG_URL)}> Random </button>
            </div>}
            </div>
        )
    }

export default Editor;