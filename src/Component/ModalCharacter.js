import {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ModalCharacter = ({show, handleClose}) => {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const handleForm = (e) => {
    e.preventDefault()
    if(image === "" || name === "" || desc === ""){
      setMessage(true)
    }else{
      setMessage(false)
      console.log(name, image, desc)
      setImage("")
      setName("")
      setDesc("")
    }
  }
    
        
    return (
        <div>    
            <Modal className="" show={show} onHide={handleClose} >
              <Modal.Header closeButton  className="border-0 pt-5 pb-0 mx-3">
                <Modal.Title className="pt-4">Character</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="px-3" onSubmit={handleForm}>
                  <Form.Group className="mb-3 mt-0" controlId="exampleForm.ControlInput1">
                    <Form.Label >Image</Form.Label>
                    <Form.Control type="text" className="bg-light border-0" value={image} onChange={(e)=>setImage(e.target.value)} />
                    <Form.Text className="text-muted">
                    paste the url of a JPG or PNG of max 20 kb
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" className="bg-light border-0" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >Description</Form.Label>
                    <Form.Control as="textarea" rows={3} className="bg-light border-0" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Form.Text className="text-danger">
                    {message?"Bummer! We can't create this character right now. Probably a black hole in the way. Try Later please.":""}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                      <Form.Label>Friends</Form.Label>
                      <Form.Select className="bg-light border-0" type="image" disabled>
                      <option className="option">Jane Cooper</option>
                      </Form.Select>
                  </Form.Group>
                  <Modal.Footer className="border-0 pt-0">
                  <Button className="bg-light border-0" variant="secondary" onClick={handleClose}>
                    CANCEL
                  </Button>
                  <Button className="bg-dark text-white border-0" variant="primary" type="submit" onClick={()=> (image === "" || name === "")?console.log('verified'):handleClose()}>
                    CREATE PLANET
                  </Button>
                </Modal.Footer>
                </Form>
              </Modal.Body>
              
            </Modal> 
        </div>
    )
}

export default ModalCharacter
