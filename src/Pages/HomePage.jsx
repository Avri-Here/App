import { useNavigate } from "react-router-dom";
import imgChat from "../Img/Chat.jpg";
import imgShop from "../Img/Shop.jpg";
import FileUploadImg from "../Img/cloud-upload.jpg";
import News from "../Img/News.jpg";
export default () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 dir="rtl" style={{ textAlign: "center" }}>
        לאן מתקדמים מכאן ?
      </h1>
      <br />
      <hr />
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
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
            <div className="card" style={{ width: "18rem" }}>
              <img src={News} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 dir="rtl" className="card-title">
                  קבל מבזקי חדשות !
                </h5>
                <p dir="rtl" className="card-text">
                  "חדשות עכשיו" מרכז חדשות עדכניות ומבזקים מאתרי החדשות הטובים
                  ביותר 24 שעות ביממה, החדשות מופיעות בזמן אמת ובתצוגה נוחה
                  לקריאה באופן בו ידיעה חדשה פורצת לרשימת הידיעות. האתר סורק
                  מאות אתרי חדשות נבחרים במגוון תחומים !
                </p>
                <a href="News" className="btn btn-primary">
                  Mone On !
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
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
                  שתף את הקבצים שלך !
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
        <br />
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
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
            />
            <div className="card-body">
              <h5 dir="rtl" className="card-title">
                התחל לקנות !
              </h5>
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
      </div>
    </>
  );
};
