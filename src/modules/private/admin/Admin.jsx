import React, { useState } from 'react'
import "./Admin.scss"
function Admin() {
  const [formData, setFormData] = useState({
    img:"",
    name:"",
    rate:"",
currency:"",
category:"",
id:""
  });
  let date = new Date()
let id = date.getTime();
  
function writeData(e) {
  let name = e.target.name;
  let value = e.target.value;
  setFormData({
      ...formData,[name]:value,
  })
}
function formSubmit(e) {
  console.log(formData);
  e.preventDefault()
  setFormData({
    img:"",
    name:"",
    rate:"",
currency:"",
category:"",
id:""
  })
}
function getImgAdd(e) {
  let splitPath = e.target.value
  alert(splitPath)
}
return (
    <div className='admin'>
      <input onChange={getImgAdd} type="file" name="img-file" className='img-file' />
<form onSubmit={formSubmit}>
<input required onChange={writeData} value={formData.img} type="text" name='img'/>
<input required onChange={writeData} value={formData.name} type="text" name='name' />
<input required onChange={writeData} value={formData.rate < 1 ? 0 : formData.rate} type="number" name='rate'/>
<input required onChange={writeData} value={formData.currency} type="text" name='currency'/>
<input required onChange={writeData} value={formData.category} type="text" name='category'/>
<input required onChange={writeData} value={formData.id} type="text" name='id'/>
<button type="submit">SUBMIT</button>
</form>

    </div>
  )
}

export default Admin