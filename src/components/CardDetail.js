import Cant from "./Cant";

const CardDetail = ({item}) => {
    return (
        <div className="container-Detail">
            <img className="imgDetail" src={item.img} alt="producto" />
            <div className="bodyDetail">
               <h3 className="card-title">{item.name}</h3>
               <p>{item.marca}</p>
               <p>{item.description}</p>
               <p>${item.precio}</p>
               <Cant />
            </div>
        </div>
    );
}

export default CardDetail;
