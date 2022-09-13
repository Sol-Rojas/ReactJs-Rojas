import Card from '../components/Card';

const Cards = () => {

  return (
    <>
       <Card
          id={1}
          img="https://bairesrocks.vteximg.com.br/arquivos/ids/236251/GP-310WE_8.jpg?v=637837506252130000"
          name="Piano Celviano"
          marca="Casio"
          precio="890000"/>
        <Card
          id={2}
          img="https://bairesrocks.vteximg.com.br/arquivos/ids/238330/YAM-TRBX174DBM_v.jpg?v=637951335785500000"
          name="Guitarra Electrica"
          marca="Yamaha"
          precio="73500"/>
        <Card
          id={3}
          img="https://bairesrocks.vteximg.com.br/arquivos/ids/237876/YAM-PAC120HBL-02.jpg?v=637930960267530000"
          name="Redoblante"
          marca="Yamaha"
          precio="91600"/>
        <Card
          id={4}
          img="https://bairesrocks.vteximg.com.br/arquivos/ids/222315/0107112841_gtr_frt_001_rr.jpg?v=637468491117700000"
          name="Guitarra Electrica"
          marca="Fender"
          precio="890000"/>
        <Card
          id={5}
          img="https://bairesrocks.vteximg.com.br/arquivos/ids/228864/Flauta_Knighe_Tecnica-02.jpg?v=637617411942330000"
          name="Saxofon"
          marca="Knight"
          precio="1400000"/>

    </>
   )
}

export default Cards;