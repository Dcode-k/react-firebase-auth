import React,{useRef} from 'react'
import { Form, Button, Card,Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link} from 'react-router-dom'

const ForgotPassword = () => {
    const emailRef = useRef()
    const [error, setError] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const { forgotPassword} = useAuth()

    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage("Email sent")
        } catch (error) { 
            setError("Error in resetting password")
        }
        setLoading(false)
    }
  return (
      <>
          <Card>
              <Card.Body>
                  <Card.Title>Forgot Password</Card.Title>
                  {/* { currentUser.email} */}
                  {error && <Alert varient="danger">{error}</Alert>}
                  {message && <Alert varient="success">{message}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                          <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                        </Form.Group>
                      <Button className='w-100' disabled={loading} type='submit'>Reset Password</Button>
                  </Form>
                  <div className='w-100 text-center mt-2'>
                      <Link to="/login">Login</Link>
                   </div>
              </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
             Need an account? <Link to="/signup">Sign Up</Link>
          </div>
      </>
  )
}

export default ForgotPassword