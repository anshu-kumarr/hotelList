import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import InfoBox from './InfoBox'
import InfoMap from './InfoMap'
import Breadcrumb from './Breadcrumb'

interface Props {
  name: string,
  path:string
}

const HotelInfo = ({name,path}: Props) => {
  return (
    <HotelInfoContainer>
      <Navbar />
      <Breadcrumb path={path} />
      <Container>
        <InfoBox title={name}/>
        <InfoMap/>
      </Container>
    </HotelInfoContainer>
  )
}

export default HotelInfo
const HotelInfoContainer = styled.div``
const Container = styled.div`
display:flex;
`