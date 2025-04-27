import { Button } from 'antd';
import React, { useState } from 'react'

function ModalFull() {
    const [modalopen,setmodalopen]=useState(false);

  return (
    <>
        
        <Button type="primary" onClick={() => setmodalopen(true)}>
        
      </Button>
    </>
  )
}

export default ModalFull