import React,{useRef} from 'react'
import { Form, Button, Card,Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link,useNavigate } from 'react-router-dom'

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const { signup } = useAuth()
    const navigate = useNavigate()

    const handleSubmit =async (e) => {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) { 
        return  setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch (error) { 
            setError("Error signing up")
        }
        setLoading(false)
    }
  return (
      <>
          <Card>
              <Card.Body>
                  <Card.Title>Signup</Card.Title>
                  {/* { currentUser.email} */}
                  {error && <Alert varient="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                          <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                        </Form.Group>
                      <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter email" ref={passwordRef} required/>
                        </Form.Group>
                      <Form.Group controlId="password-confirm">
                          <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Enter email" ref={passwordConfirmRef} required/>
                      </Form.Group>
                      <Button className='w-100' disabled={loading} type='submit'>Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              Already have an account?<Link to="/login">Login</Link>
          </div>
      </>
  )
}

export default Signup