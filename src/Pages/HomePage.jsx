
import { useNavigate } from "react-router-dom";
import imgChat from "../Img/Chat.jpg";
import imgShop from "../Img/Shop.jpg";
import FileUploadImg from "../Img/cloud-upload.jpg";
export default () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 dir="rtl" style={{ textAlign: "center", fontFamily: "cursive" }}>
        {localStorage.getItem("UserName")} לאן מתקדמים מכאן ?
      </h1>
      <br />
      <hr />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18.1rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={imgChat}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  התחל לשוחח !
                </h5>
                <p dir="rtl" className="card-text">
                  Chat ומרחבים עוזרים לצוותים לשתף פעולה מכל מקום ובאופן שמאפשר
                  גמישות ויעילות, מצ'אטים אישיים ועד שיחות קבוצתיות. תוכלו לשמור
                  על קשר עם האנשים שאיתם אתם עובדים באופן מאובטח, ולשדרג את
                  יכולות העבודה הקבוצתית באמצעות צ'אטים, משימות וקבצים משותפים.
                </p>
                <a href="ChatHere" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18.1rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={imgShop}
                className="card-img-top"
                alt="..."
                width={50}
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">התחל לקנות !</h5>
                <p dir="rtl" className="card-text">
                  כאן, תמצאו אצלנו את המחירים הכי טובים בשוק. חד משמעית! מאחר
                  ואנחנו דואגים לייבוא הישיר של המוצרים, בלי להציב עוד ספקים
                  וחנויות בדרך, ומאחר ואנחנו מקפידים לבצע מחקר שוק מקיף סביב כל
                  מוצר, אתם מקבלים מאיתנו את המוצרים במחיר הכי זול שניתן להשיג.
                </p>
                <a href="Sale" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18.1rem" }}>
              <img
                style={{
                  width: "18rem",
                  height: "12rem",
                  backgroundSize: "cover",
                  float: "left",
                }}
                src={FileUploadImg}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  שתף את הקבצים שלך{" "} !  
                </h5>
                <p className="card-text" dir="rtl">
                  רוצה לשתף את התמונה שצילמת לפני שלושה שבועות בטלפון שלך, או את
                  המתכון ששמרת במחשב שלך? באפשרותך לשתף תמונות, קבצים ואתרי
                  אינטרנט עם חבריך Skype באמצעות Windows, Mac, Linux, טלפון או
                  טאבלט של Android iPhone או iPad.
                </p>
                <a href="FileUploadPage" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
