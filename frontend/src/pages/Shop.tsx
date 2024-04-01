import { useNavigate } from "react-router-dom"

function Shop() {
    const Navigate = useNavigate()
    if(localStorage.getItem('token') == " "){
        Navigate('/signin')
    }
  return (
    <div>
      Shopping page
    </div>
  )
}

export default Shop
