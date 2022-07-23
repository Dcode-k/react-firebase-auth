import React,{useState} from 'react'
import {Card,Button,Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link,useNavigate} from 'react-router-dom'
const Dashboard = () => {
    const [error, setError] = useState("")
    const { currentUser,logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        setError("")
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            
        }
     }
  return (
      <>
          <Card>
              <Card.Body>
                  <h1 className='text-center mb-4'>Profile</h1>
                  {error && <Alert varient="danger">{error}</Alert>}
                  <strong>Email:</strong>{currentUser.email}
                  <Link to="/update-profile" className="btn btn-primary w-100">Update Profile</Link>
                </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              <Button varient="link" onClick={handleLogout}>Log out</Button>
          </div>
      </>
  )
}

export default Dashboard