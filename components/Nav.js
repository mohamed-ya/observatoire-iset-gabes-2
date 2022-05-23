import React from 'react'
import { useSession, signOut } from 'next-auth/client'
import Image from 'next/image'
import logo from '../images/logo.png'

const Nav = () => {
  const [session, loading] = useSession()

  if(!session) return null;
  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <div className="container-fluid">
        <div className="navbar-brand d-flex">
          <Image src={logo} alt="logo" width={30} height={30} />
          <span className="ms-1">ISET GABES</span>
        </div>


        <div className="d-flex align-items-center">
          
      <button className="btn btn-primary mx-4" ><a href="https://us14.list-manage.com/survey?u=be0d81ae10815b640a1e011f7&id=fd9b0e38ed&attribution=false" class="button">participer a l'enquete</a></button>
         
          <button className="btn btn-outline-danger mx-2"
          onClick={() => signOut()}>
            Logout
          </button>
          <img src={
            session.user.image || 
            'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
          } 
          className="img-fluid rounded-circle" 
          alt="logo"
          width={35} height={35} />

          <h5 className="me-3 ms-1 mt-1 text-danger text-capitalize">
            etudiant
          </h5>
        </div>
      </div>
    </nav>
  )
}

export default Nav
