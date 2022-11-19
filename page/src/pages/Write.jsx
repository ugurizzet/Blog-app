import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('')
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display:'none'}} type="file" id='file' />
          <label className='file' htmlFor="file">Upload Imges</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Save as a Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio"  name='cat' value='html' id='html'/>
          <label htmlFor="html">HTML</label>
          </div>
          <div className="cat">
          <input type="radio"  name='cat' value='react' id='react'/>
          <label htmlFor="react">React</label>            
          </div>
          <div className="cat">
          <input type="radio"  name='cat' value='css' id='css'/>
          <label htmlFor="css">Css</label>            
          </div>
          <div className="cat">
          <input type="radio"  name='cat' value='javascript' id='javascript'/>
          <label htmlFor="javascript">JS</label>            
          </div>
          <div className="cat">
          <input type="radio"  name='cat' value='other' id='other'/>
          <label htmlFor="other">Other</label>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
