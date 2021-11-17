// import {React, useState} from 'react'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

// const ModalEdit = () => {
//     const [show, setShow] = useState(false);
    
      
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

    


//     return (
//         <div> 
//             <Button variant="primary" onClick={handleShow}>
//               Launch demo modal
//             </Button>
      
//             <Modal className="" show={show} onHide={handleClose} >
//               <Modal.Header closeButton  className="border-0 pt-5 pb-0 mx-3">
//                 <Modal.Title className="pt-4">Planet</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//               <Form className="px-3">
//                 <Form.Group className="mb-3 mt-0" controlId="exampleForm.ControlInput1">
//                   <Form.Label >Image</Form.Label>
//                   <Form.Control type="text" className="bg-light border-0" />
//                   <Form.Text className="text-muted">
//                   paste the url of a JPG or PNG of max 20 kb
//                   </Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control type="name" className="bg-light border-0" />
//                   <Form.Text className="text-muted">
//                   </Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                   <Form.Label >Description</Form.Label>
//                   <Form.Control as="textarea" rows={3} className="bg-light border-0 mb-3"  />
//                   <Form.Text className="text-danger">
//                   Bummer! We can't create this planet right now. Probably a black hole in the way. Try Later please
//                   </Form.Text>
//                 </Form.Group>
//               </Form>
//               </Modal.Body>
//               <Modal.Footer className="border-0 pt-0">
//                 <Button className="bg-light border-0" variant="secondary" onClick={handleClose}>
//                   CANCEL
//                 </Button>
//                 <Button className="bg-dark text-white border-0" variant="primary" onClick={handleClose}>
//                   CREATE PLANET
//                 </Button>
//               </Modal.Footer>
//             </Modal> 
//         </div>
//     )
// }

// export default ModalEdit

