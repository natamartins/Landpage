import Image from 'next/image'
import React from 'react'
import ArrowTop from '@/Images/arrowTop.svg'
import ArrowDown from '@/Images/arrowDown.svg'
import Button from './Button'

const TableTr = ({
  name,
  showTable,
  handleCloseTable,
  handleShowTable
}: any) => {
  return (
    <>
      <td>
        <Image src={name.image} alt="" width={20} height={20} />
        <p key={name.name}>{name.name}</p>
      </td>
      <td>
        {showTable ? (
          <Button
            Icon={ArrowTop}
            handleCloseTable={handleCloseTable}
            showTable={showTable}
          />
        ) : (
          <Button Icon={ArrowDown} handleShowTable={handleShowTable} />
        )}
      </td>
    </>
  )
}

export default TableTr
