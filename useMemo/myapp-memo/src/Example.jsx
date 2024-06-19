
import React from 'react'
import { useState , useMemo } from 'react'

function Example() {
    const [isdarkmode , setisdarkmode] = useState(false)
    const theme = useMemo(()=>{
        return{
            backgroundColor : isdarkmode ? "black" : "white",
            color : isdarkmode ? "white" : "black"
        }
    },[isdarkmode])

    document.body.style.backgroundColor = theme.backgroundColor
    document.body.style.color = theme.color
  return (
    <div>
        <button onClick={()=>setisdarkmode(!isdarkmode)}>Toggle mode</button>
       <center>
       
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsa ea incidunt consequuntur magni nam deleniti voluptatibus quo suscipit hic nostrum delectus, ducimus laboriosam fuga quas est inventore explicabo id.</p>
       </center>
    </div>
  )
}

export default Example
