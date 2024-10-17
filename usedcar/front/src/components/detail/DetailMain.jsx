import { DetailMainWrap } from './detailStyle';
import { useLocation, useNavigate} from 'react-router-dom';
import { formatPrice } from '../../utils/formPrice';
import axios from 'axios';

const DetailMain = () => {

    const location = useLocation();
    const car = location.state;
    console.log(car);
    
    const navigate= useNavigate();
   

    const deleteCar = async()=>{
        if(window.confirm("삭제하시겠습니까?")){
            try {
                await axios.delete(`http://localhost:3333/car/${car.cNo}`);
                alert('삭제되었습니다.');
                navigate('/');
            } catch (error) {
                console.error("차량 삭제 중 오류 발생: ", error);
                alert("차량 삭제 중 오류가 발생했습니다.");
            }
        }
    }
    
    const cone = () =>{
        alert(`${car.seller_tel}로 연락 바랍니다.`)
    }

  return (
    <DetailMainWrap>
<div className="main-info">
    <div className="info-text">
        <h1>{car.name}</h1>
        <p>{car.year} · {car.mileage} · {car.fueltype}</p>
    </div>
    <div className="price-details">
        <div className="price">
            <span>판매가격</span>
            <strong>{formatPrice(car.price)}</strong>
        </div>
        <div className="monthly-payment">
            <span>할부</span>
            <strong>{formatPrice(car.price)}</strong>
        </div>
    </div>
    <div className="contact-buttons">
        <button className="contact-call" onClick={cone}>전화 상담</button>
        <button className="contact-message"  onClick={cone}>문자 상담</button>
    </div>
</div>
            <div className="image-section">
                <img src={`http://localhost:3333${car.image}`} alt={car.name} />
            </div>
            <div className="info-section">
                <div className="info-card">
                    <h3>차량 정보</h3>
                    <p>모델명: {car.name}</p>
                    <p>제조사: {car.brand}</p>
                    <p>연식: {car.year}년</p>
                    <p>주행 거리: {car.mileage}km</p>
                    <p>연료: {car.fueltype}</p>
                    <p>컬러: {car.color}</p>
                </div>
                <div className="info-card">
                <h3>판매자 정보</h3>
                <p>이름: {car.seller_name}</p> 
                    <p>전화번호: {car.seller_tel}</p>
                    <p>이메일: {car.seller_email}</p>
                </div>
            </div>
            <div className="contact-buttons">
            <button onClick={() => navigate(`/detailuser/${car.cNo}`, { state: car })}>수정하기</button>
            <button onClick={deleteCar}>삭제하기</button>
            </div>
    </DetailMainWrap>
  );
};

export default DetailMain;
