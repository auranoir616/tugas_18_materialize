import React, { Component } from "react";
import{Slide,Slider,Caption,Row,Col,Card,CardTitle,Pagination,Icon} from "react-materialize"
import Navside from "./sidenav";
class App extends Component{
  render(){
    return (

    <div style={{margin:"20px"}}>
      <Navside />
         <Slider 
  fullscreen={false}
  options={{
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000
  }}
>
  <Slide  image={<img alt="" src="https://listverse.com/wp-content/uploads/2020/11/around-the-eiffel-tower.jpg" />}>
    <Caption placement="center">
      <h3>
       HONGKONG
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Dapatkan Kesempatan Jalan-Jalan Ke HONGKONG Dengan Membeli Sebuah Product.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://listverse.com/wp-content/uploads/2020/11/around-the-eiffel-tower.jpg"  />}>
    <Caption placement="left">
      <h3>
      PANTAI
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Dapatkan Kesempatan Jalan-Jalan Ke HONGKONG Dengan Membeli Sebuah Product.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://listverse.com/wp-content/uploads/2020/11/around-the-eiffel-tower.jpg"/>}>
    <Caption placement="right">
      <h3>
      PANTAI
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Dapatkan Kesempatan Jalan-Jalan Ke HONGKONG Dengan Membeli Sebuah Product.
      </h5>
    </Caption>
  </Slide>
</Slider>
<Row >
  <Col m={3}>
  <Card header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg" >Audio</CardTitle>}
    >
    Audio Technica - Mulai Dari <mark style={{backgroundColor:"red"}}>Rp. 910 rb</mark>
    </Card>
  </Col>

  <Col  m={3}>
  
  <Card header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg" >Handphone</CardTitle>}
    >
   Handphone Samsung - Mulai Dari <mark style={{backgroundColor:"red"}}>Rp. 200 rb</mark>
    </Card>
  
  </Col>

  <Col m={3}>

  <Card header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg" >Sequishy</CardTitle>}
    >

      Sequishy - Mulai Dari <mark style={{backgroundColor:"red"}}>Rp. 5,5 rb</mark>

    </Card>
  
  </Col>

  <Col m={3}>
    
    <Card header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg" >Koleksi The Avenger</CardTitle>}>

   
   Koleksi The Avenger - Mulai Dari <mark style={{backgroundColor:"red"}}>Rp. 10 rb</mark>
    </Card>
  </Col>
</Row>
<Pagination
  activePage={2}
  items={10}
  leftBtn={<Icon>chevron_left</Icon>}
  maxButtons={8}
  rightBtn={<Icon>chevron_right</Icon>}
/>
    </div>
  );
}
}

export default App;
