import Image from 'next/image'
import React from 'react'

const Button = ({
  Icon,
  handleCloseTable,
  handleShowTable,
  showTable
}: any) => {
  return (
    <button onClick={showTable ? handleCloseTable : handleShowTable}>
      <Image src={Icon} alt="" width={20} height={20} />
    </button>
  )
}

export default Button
